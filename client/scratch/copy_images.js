const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', '..', 'newImages');
const destDir = path.join(__dirname, '..', 'public', 'newImages');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir)
  .filter(file => file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png'));

console.log(`Found ${files.length} images in newImages folder:`);
files.forEach((file, index) => {
  const ext = path.extname(file);
  const newName = `gallery_new_${index + 1}${ext}`;
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, newName);
  
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied: "${file}" -> "${newName}"`);
});

console.log('Copy complete!');
