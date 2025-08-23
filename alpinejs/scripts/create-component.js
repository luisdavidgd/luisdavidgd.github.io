const fs = require('fs');
const path = require('path');

const [componentName, siteName] = process.argv.slice(2);

if (!componentName || !siteName) {
  console.error('❌ Usage: npm run create-component <componentName> <siteName>');
  process.exit(1);
}

const baseDir = path.join('alpinejs-pages', siteName);
const componentDir = path.join(baseDir, 'components');
const scriptDir = path.join(baseDir, 'components');

const componentPath = path.join(componentDir, `${componentName}.html`);
const scriptPath = path.join(scriptDir, `${componentName}.js`);

fs.mkdirSync(componentDir, { recursive: true });
fs.mkdirSync(scriptDir, { recursive: true });

let created = false;

// Componente HTML
if (fs.existsSync(componentPath)) {
  console.warn(`⚠️  Component HTML already exists: ${componentPath}`);
} else {
  fs.writeFileSync(componentPath, `<!-- ${componentName} component -->\n<div>\n  <!-- Content -->\n</div>\n`);
  console.log(`✅ Created HTML: ${componentPath}`);
  created = true;
}

// Script JS
if (fs.existsSync(scriptPath)) {
  console.warn(`⚠️  Script JS already exists: ${scriptPath}`);
} else {
  fs.writeFileSync(
    scriptPath,
    `// ${componentName}.js\nconsole.log('${componentName} loaded');\n`
  );
  console.log(`✅ Created JS: ${scriptPath}`);
  created = true;
}

if (!created) {
  console.log('✅ Nothing was created (both files already exist).');
}
