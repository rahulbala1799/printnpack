// Migration: Create leads table (contact/quote form submissions for pipeline)

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      source TEXT NOT NULL DEFAULT 'Contact',
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      subject TEXT,
      message TEXT,
      payload JSONB DEFAULT '{}',
      status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'quote_sent', 'won', 'lost')),
      notes TEXT,
      created_at TIMESTAMPTZ DEFAULT now(),
      updated_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
  `);

  console.log('✅ Created leads table with indexes');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS leads CASCADE;');
  console.log('✅ Dropped leads table');
}

module.exports = { up, down };
