import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  source: {
    entry: {
      index: ['./src/**'],
    },
    exclude: ['**/*.stories.*', '**/stories/**'],
  },
  tools: {
    cssLoader: {
      modules: {
        auto: true,
        localIdentName: '[name]__[local]--[hash:base64:5]',
      },
    },
  },
  lib: [
    {
      bundle: false,
      dts: true,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
  },
  plugins: [pluginReact()],
});
