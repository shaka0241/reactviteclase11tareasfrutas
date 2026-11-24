// Reúne las reglas generales de JavaScript, TypeScript y los plugins de React.
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// Configuración plana de ESLint: excluye la salida compilada y aplica reglas
// recomendadas a los archivos TypeScript y TSX del proyecto.
export default defineConfig([
  // Los archivos generados se validan en su origen, no como código fuente.
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      // Declara las APIs del navegador (por ejemplo, document) como globales.
      globals: globals.browser,
    },
  },
])
