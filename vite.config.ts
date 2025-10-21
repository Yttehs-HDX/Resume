import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration
 * Configures React Native Web compatibility and build optimization
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Map react-native imports to react-native-web for web compatibility
    alias: {
      'react-native': 'react-native-web',
      'react-native-svg': 'react-native-svg-web',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Resolve .web.js files first for web-specific implementations
      resolveExtensions: ['.web.js', '.js', '.ts', '.tsx'],
    },
  },
  define: {
    // Define empty process.env for libraries that expect Node.js environment
    'process.env': {},
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})
