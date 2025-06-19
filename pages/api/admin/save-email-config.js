import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, appPassword } = req.body;

    // Validate inputs
    if (!email || !appPassword) {
      return res.status(400).json({ message: 'Email and app password are required' });
    }

    // Create the configuration object
    const config = {
      GMAIL_USER: email,
      GMAIL_APP_PASSWORD: appPassword,
    };

    // Save to .env.local file
    const envContent = Object.entries(config)
      .map(([key, value]) => `${key}=${value}`)
      .join('\n');

    const envPath = path.join(process.cwd(), '.env.local');
    fs.writeFileSync(envPath, envContent);

    // Return success
    res.status(200).json({ message: 'Configuration saved successfully' });
  } catch (error) {

    res.status(500).json({ message: 'Failed to save configuration', error: error.message });
  }
} 