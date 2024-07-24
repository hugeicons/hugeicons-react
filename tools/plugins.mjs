/* eslint-disable import/no-extraneous-dependencies */
import bundleSize from '@atomico/rollup-plugin-sizes';
import replace from '@rollup/plugin-replace';
import license from 'rollup-plugin-license';
import esbuild from 'rollup-plugin-esbuild';
import {visualizer} from "rollup-plugin-visualizer";

const plugins = (pkg, minify, esbuildOptions = {}) =>
  [
    esbuild({
      minify,
      ...esbuildOptions,
    }),
    license({
      banner: `@license ${pkg.name} v${pkg.version}

See the LICENSE file in the root directory of this source tree.`,
    }),
    visualizer({
      filename: './stats.html', // or any path you prefer
      open: false, // this will open the visualizer report in your browser after the build
    }),
    bundleSize(),
  ].filter(Boolean);

export { bundleSize, license, replace };

export default plugins;
