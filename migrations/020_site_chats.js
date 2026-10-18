// Website chat sessions so staff can see them and take over.

async function up(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS site_chats (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      page TEXT,
      status TEXT NOT NULL DEFAULT 'ai' CHECK (status IN ('ai', 'human', 'closed')),
      taken_over_by UUID REFERENCES users(id),
      visitor_email TEXT,
      last_message_at TIMESTAMPTZ DEFAULT now(),
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS site_chat_messages (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      chat_id UUID NOT NULL REFERENCES site_chats(id) ON DELETE CASCADE,
      role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'staff')),
      content TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `);

  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_site_chats_last_message ON site_chats(last_message_at DESC);
  `);
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_site_chat_messages_chat ON site_chat_messages(chat_id, created_at);
  `);

  console.log('✅ Created site chat tables');
}

async function down(client) {
  await client.query('DROP TABLE IF EXISTS site_chat_messages CASCADE;');
  await client.query('DROP TABLE IF EXISTS site_chats CASCADE;');
  console.log('✅ Dropped site chat tables');
}

module.exports = { up, down };
