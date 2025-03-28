const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const teamDir = path.join(process.cwd(), 'public', 'images', 'team');
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

// Generate a generic placeholder SVG
const placeholderSvg = `
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6" />
  <circle cx="200" cy="150" r="80" fill="#cbd5e1" />
  <circle cx="200" cy="120" r="40" fill="#94a3b8" />
  <rect x="120" y="240" width="160" height="120" rx="10" fill="#cbd5e1" />
  <text x="200" y="300" font-family="Arial" font-size="18" fill="#64748b" text-anchor="middle">Team Member</text>
  <text x="200" y="330" font-family="Arial" font-size="14" fill="#64748b" text-anchor="middle">PrintNPack</text>
</svg>
`;

// Create a generic team member placeholder
fs.writeFileSync(path.join(teamDir, 'placeholder.svg'), placeholderSvg.trim());
console.log('Generated team member placeholder');

// Also create a company history image
const historyDir = path.join(process.cwd(), 'public', 'images', 'about');
if (!fs.existsSync(historyDir)) {
  fs.mkdirSync(historyDir, { recursive: true });
}

const historySvg = `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#dbeafe" />
  <rect x="100" y="100" width="600" height="400" rx="20" fill="#bfdbfe" />
  <text x="400" y="300" font-family="Arial" font-size="32" fill="#1e40af" text-anchor="middle">Company History</text>
  <text x="400" y="340" font-family="Arial" font-size="20" fill="#1e40af" text-anchor="middle">Since 2010</text>
</svg>
`;

fs.writeFileSync(path.join(historyDir, 'history.svg'), historySvg.trim());
console.log('Generated company history image');

console.log('All placeholder images have been created!'); 