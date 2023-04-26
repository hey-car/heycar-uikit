import { join } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import typescript from 'rollup-plugin-typescript2';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'packages',
      tsConfigFilePath: join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
      insertTypesEntry: true,
    }),
    react(),
    // typescript({}),

    // viteTsConfigPaths({
    //   root: './',
    // }),
  ],

  build: {
    outDir: 'dist',
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: 'packages/index.ts',
      name: '@heycar-uikit',
      fileName: 'index',
      // Change this to the formats you want to support.
      // Don't forgot to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
