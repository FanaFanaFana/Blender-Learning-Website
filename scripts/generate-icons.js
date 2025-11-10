const fs = require('fs')
const path = require('path')

const iconsDir = path.join(__dirname, '../public/Icons')
const files = fs.readdirSync(iconsDir)
  .filter(file => file.endsWith('.svg') || file.endsWith('.png'))
  .sort()

const manifest = { icons: files }

fs.writeFileSync(
  path.join(iconsDir, 'icons.json'),
  JSON.stringify(manifest, null, 2)
)

console.log('✅ Generated icons.json with', files.length, 'icons')