import plugins from './tools/plugins.mjs';
import pkg from './package.json' assert {type: 'json'};
import dts from 'rollup-plugin-dts';

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
    minify: true,
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
        external: ['react', 'prop-types', ...external],
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
            react: 'react',
            'prop-types': 'PropTypes',
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
