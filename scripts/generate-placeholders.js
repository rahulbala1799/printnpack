const fs = require('fs');
const path = require('path');

// Create directory if it doesn't exist
const heroDir = path.join(process.cwd(), 'public', 'images', 'hero');
if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

// Generate SVG placeholders for each product
const products = [
  { name: 'pizza-box', color: '#ef4444', textColor: '#ffffff' },
  { name: 'paper-bag', color: '#16a34a', textColor: '#ffffff' },
  { name: 'burger-box', color: '#f59e0b', textColor: '#ffffff' },
  { name: 'leaflet', color: '#3b82f6', textColor: '#ffffff' },
  { name: 'napkin', color: '#8b5cf6', textColor: '#ffffff' },
];

products.forEach(product => {
  const svg = `
  <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${product.color}" />
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="${product.textColor}" text-anchor="middle" dominant-baseline="middle">
      ${product.name.split('-').join(' ').toUpperCase()}
    </text>
    <text x="50%" y="65%" font-family="Arial" font-size="16" fill="${product.textColor}" text-anchor="middle" dominant-baseline="middle">
      PrintNPack
    </text>
  </svg>
  `;
  
  fs.writeFileSync(path.join(heroDir, `${product.name}.svg`), svg.trim());
  console.log(`Generated ${product.name}.svg`);
});

console.log('All placeholder images have been created!'); 