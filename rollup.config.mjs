import plugins from './tools/plugins.mjs';
import { readFileSync } from 'fs';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const packageName = 'HugeiconsReact';
const outputFileName = 'hugeicons-react';
const outputDir = `dist`;
const inputs = [`src/hugeicons-react.ts`];

const bundles = [
  {
    format: 'umd',
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: 'cjs',
    inputs,
    outputDir,
    minify: true,
  },
  {
    format: 'esm',
    inputs: inputs,
    outputDir,
    preserveModules: true,
    preserveModulesRoot: 'src',
    minify: false,
  },
];

const configs = bundles
  .map(
    ({
       inputs,
       outputDir,
       outputFile,
       format,
       minify,
       preserveModules,
       entryFileNames,
       external = [],
       paths,
     }) =>
      inputs.map((input) => ({
        input,
        plugins: plugins(pkg, minify),
        external: ['react', 'prop-types', '@hugeicons/react', '@hugeicons/core-free-icons', ...external],
        output: {
          name: packageName,
          ...(preserveModules
            ? {
              dir: `${outputDir}/${format}`,
            }
            : {
              file:
                outputFile ??
                `${outputDir}/${format}/${outputFileName}.js`,
            }),
          paths,
          entryFileNames,
          format,
          sourcemap: false,
          preserveModules,
          globals: {
            react: 'React',
            'prop-types': 'PropTypes',
            '@hugeicons/react': 'HugeiconsReact',
            '@hugeicons/core-free-icons': 'HugeiconsCoreFreeIcons',
          },
        },
      })),
  )
  .flat();

export default [
  {
    input: inputs[0],
    output: [
      {
        file: `dist/${outputFileName}.d.ts`,
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
  ...configs,
];
