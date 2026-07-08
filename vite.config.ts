import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@automerge/automerge-repo',
        replacement: path.resolve(__dirname, '../automerge-repo/packages/automerge-repo/src'),
      },
      {
        find: '@automerge/automerge-repo/slim',
        replacement: path.resolve(__dirname, '../automerge-repo/packages/automerge-repo/src'),
      },
      {
        find: '@automerge/automerge-repo-react-hooks',
        replacement: path.resolve(__dirname, '../automerge-repo/packages/automerge-repo-react-hooks/src'),
      },
    ],
    dedupe: [
      '@automerge/automerge-repo',
      '@automerge/automerge-repo-react-hooks',
      'react',
      'react-dom',
    ],
  },
})