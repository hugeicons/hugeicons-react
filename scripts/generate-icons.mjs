import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const freeIconsSourceDir = '/Users/mac/Documents/Projects/Hugeicons/core/free-icons/src';
const outputIconsDir = path.join(__dirname, '../src/icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(outputIconsDir)) {
  fs.mkdirSync(outputIconsDir, { recursive: true });
}

// Get all icon files
const iconFiles = fs.readdirSync(freeIconsSourceDir)
  .filter(file => file.endsWith('Icon.ts'))
  .sort();

console.log(`Found ${iconFiles.length} icon files`);

const iconExports = [];
const iconNames = [];

// Generate individual icon component files
for (const iconFile of iconFiles) {
  // Extract icon name: "Home01Icon.ts" -> "Home01"
  const iconName = iconFile.replace('Icon.ts', '');
  const componentName = `${iconName}Icon`;
  
  iconNames.push(iconName);
  
  // Generate the component file content
  // Import icon data with same name, capture it before component declaration to avoid conflict
  const componentContent = `import { HugeiconsIcon, type HugeiconsIconProps } from '@hugeicons/react';
import { ${componentName} as ${iconName}IconData } from '@hugeicons/core-free-icons';

/**
 * @component ${componentName}
 * @description Renders hugeicons ${componentName} svg element
 *
 * @param {Omit<HugeiconsIconProps, 'icon'>} props - Hugeicons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 */
export const ${componentName} = (props: Omit<HugeiconsIconProps, 'icon'>) => {
  return <HugeiconsIcon icon={${iconName}IconData} {...props} />;
};

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

  // Write component file
  const outputFile = path.join(outputIconsDir, `${componentName}.tsx`);
  fs.writeFileSync(outputFile, componentContent);
  
  // Add to exports (only export the named export to avoid conflicts)
  iconExports.push(`export { ${componentName} } from './${componentName}.js';`);
  
  if (iconFiles.indexOf(iconFile) % 100 === 0) {
    console.log(`Generated ${iconFiles.indexOf(iconFile) + 1}/${iconFiles.length} icons...`);
  }
}

// Generate index file with all exports
const indexContent = `// Auto-generated file - do not edit manually
${iconExports.join('\n')}
`;

fs.writeFileSync(path.join(outputIconsDir, 'index.ts'), indexContent);

console.log(`\n✅ Successfully generated ${iconFiles.length} icon components`);
console.log(`📁 Output directory: ${outputIconsDir}`);
console.log(`📄 Index file: ${path.join(outputIconsDir, 'index.ts')}`);
