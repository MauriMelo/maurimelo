import path from 'path';
import handlebars from 'vite-plugin-handlebars';

const ASSET_URL = process.env.ASSET_URL || '';

export default {
  base: ASSET_URL,
  root: path.resolve(__dirname, 'src'),
  plugins: [
    handlebars({
      partialDirectory: path.resolve(__dirname, 'src/partials'),
    })
  ],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~fontawesome': path.resolve(__dirname, 'node_modules/fontawesome'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        // 'en-us': path.resolve(__dirname, 'src/en-us.html'),
      },
    },
  },
}