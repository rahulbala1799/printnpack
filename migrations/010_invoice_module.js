// Migration: AI Invoice Creator — quotes, invoices, pricing rules, customer price history

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS pricing_rules (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      family        TEXT NOT NULL,
      rule_key      TEXT NOT NULL,
      label         TEXT NOT NULL,
      rule_data     JSONB NOT NULL DEFAULT '{}',
      is_active     BOOLEAN NOT NULL DEFAULT true,
      sort_order    INT NOT NULL DEFAULT 0,
      created_at    TIMESTAMPTZ DEFAULT now(),
      updated_at    TIMESTAMPTZ DEFAULT now(),
      UNIQUE (family, rule_key)
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_pricing_rules_family ON pricing_rules(family) WHERE is_active = true;
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS pricing_documents (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      filename      TEXT NOT NULL,
      mime_type     TEXT,
      uploaded_by   UUID REFERENCES users(id) ON DELETE SET NULL,
      is_active     BOOLEAN NOT NULL DEFAULT true,
      created_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS pricing_document_chunks (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      document_id   UUID NOT NULL REFERENCES pricing_documents(id) ON DELETE CASCADE,
      chunk_index   INT NOT NULL,
      content       TEXT NOT NULL,
      search_vector TSVECTOR,
      created_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_pricing_chunks_fts ON pricing_document_chunks USING GIN(search_vector);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS invoice_sessions (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      admin_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      customer_id   UUID REFERENCES customers(id) ON DELETE SET NULL,
      lead_id       UUID REFERENCES leads(id) ON DELETE SET NULL,
      document_type TEXT NOT NULL DEFAULT 'vat' CHECK (document_type IN ('vat', 'cash')),
      status        TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'quoted', 'invoiced', 'archived')),
      quote_id      UUID,
      created_at    TIMESTAMPTZ DEFAULT now(),
      updated_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_invoice_sessions_admin ON invoice_sessions(admin_id, updated_at DESC);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS invoice_session_messages (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      session_id    UUID NOT NULL REFERENCES invoice_sessions(id) ON DELETE CASCADE,
      role          TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system', 'tool')),
      content       TEXT NOT NULL DEFAULT '',
      tool_calls    JSONB,
      created_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_invoice_messages_session ON invoice_session_messages(session_id, created_at);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS quotes (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      session_id    UUID REFERENCES invoice_sessions(id) ON DELETE SET NULL,
      admin_id      UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      customer_id   UUID REFERENCES customers(id) ON DELETE SET NULL,
      lead_id       UUID REFERENCES leads(id) ON DELETE SET NULL,
      customer_name TEXT,
      document_type TEXT NOT NULL DEFAULT 'vat' CHECK (document_type IN ('vat', 'cash')),
      items         JSONB NOT NULL DEFAULT '[]',
      subtotal      NUMERIC(12,2) NOT NULL DEFAULT 0,
      vat_rate      NUMERIC(5,4) NOT NULL DEFAULT 0.23,
      vat_amount    NUMERIC(12,2) NOT NULL DEFAULT 0,
      total         NUMERIC(12,2) NOT NULL DEFAULT 0,
      status        TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'accepted', 'converted')),
      notes         TEXT,
      created_at    TIMESTAMPTZ DEFAULT now(),
      updated_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_quotes_admin ON quotes(admin_id, updated_at DESC);
    CREATE INDEX IF NOT EXISTS idx_quotes_customer ON quotes(customer_id);
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS invoices (
      id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      quote_id        UUID REFERENCES quotes(id) ON DELETE SET NULL,
      admin_id        UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      customer_id     UUID REFERENCES customers(id) ON DELETE SET NULL,
      lead_id         UUID REFERENCES leads(id) ON DELETE SET NULL,
      customer_name   TEXT,
      document_type   TEXT NOT NULL DEFAULT 'vat' CHECK (document_type IN ('vat', 'cash')),
      invoice_number  TEXT UNIQUE,
      items           JSONB NOT NULL DEFAULT '[]',
      subtotal        NUMERIC(12,2) NOT NULL DEFAULT 0,
      vat_rate        NUMERIC(5,4) NOT NULL DEFAULT 0,
      vat_amount      NUMERIC(12,2) NOT NULL DEFAULT 0,
      total           NUMERIC(12,2) NOT NULL DEFAULT 0,
      status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid')),
      pdf_path        TEXT,
      sent_at         TIMESTAMPTZ,
      created_at      TIMESTAMPTZ DEFAULT now(),
      updated_at      TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_invoices_admin ON invoices(admin_id, created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_invoices_customer ON invoices(customer_id);
    CREATE INDEX IF NOT EXISTS idx_invoices_number ON invoices(invoice_number) WHERE invoice_number IS NOT NULL;
  `);

  await client.query(`
    ALTER TABLE invoice_sessions
    ADD CONSTRAINT fk_invoice_sessions_quote
    FOREIGN KEY (quote_id) REFERENCES quotes(id) ON DELETE SET NULL;
  `).catch(() => {});

  await client.query(`
    CREATE TABLE IF NOT EXISTS customer_price_snapshots (
      id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      customer_id   UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
      quote_id      UUID REFERENCES quotes(id) ON DELETE SET NULL,
      invoice_id    UUID REFERENCES invoices(id) ON DELETE SET NULL,
      source_label  TEXT,
      items         JSONB NOT NULL DEFAULT '[]',
      created_at    TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_customer_price_snapshots_customer ON customer_price_snapshots(customer_id, created_at DESC);
  `);

  await client.query(`
    ALTER TABLE customers
    ADD COLUMN IF NOT EXISTS saved_price_catalog JSONB NOT NULL DEFAULT '{"products":[]}'::jsonb;
  `);

  await client.query(`
    CREATE SEQUENCE IF NOT EXISTS invoice_number_seq START 1;
  `);

  console.log('✅ Created invoice module tables (pricing_rules, quotes, invoices, sessions, snapshots)');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS customer_price_snapshots CASCADE;');
  await client.query('ALTER TABLE customers DROP COLUMN IF EXISTS saved_price_catalog;');
  await client.query('DROP TABLE IF EXISTS invoices CASCADE;');
  await client.query('DROP TABLE IF EXISTS quotes CASCADE;');
  await client.query('DROP TABLE IF EXISTS invoice_session_messages CASCADE;');
  await client.query('DROP TABLE IF EXISTS invoice_sessions CASCADE;');
  await client.query('DROP TABLE IF EXISTS pricing_document_chunks CASCADE;');
  await client.query('DROP TABLE IF EXISTS pricing_documents CASCADE;');
  await client.query('DROP TABLE IF EXISTS pricing_rules CASCADE;');
  await client.query('DROP SEQUENCE IF EXISTS invoice_number_seq;');
  console.log('✅ Dropped invoice module tables');
}

module.exports = { up, down };
