import path from 'node:path';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import banner from 'rollup-plugin-banner2';
import { createGenerateScopedName } from 'hash-css-selector';

export default {
  input: path.join(process.cwd(), './package/index.ts'),
  output: [
    { format: 'es', file: './dist/esm/index.mjs' },
    { format: 'cjs', file: './dist/cjs/index.js' },
  ],
  plugins: [
    commonjs(),
    nodeExternals(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: path.resolve(process.cwd(), 'tsconfig.build.json'),
    }),
    replace({ preventAssignment: true }),
    postcss({
      extract: true,
      modules: { generateScopedName: createGenerateScopedName('me') },
      minimize: true,
    }),
    banner((chunk) => {
      if (chunk.fileName !== 'index.js' && chunk.fileName !== 'index.mjs') {
        return "'use client';\n";
      }

      return undefined;
    }),
  ],
};
