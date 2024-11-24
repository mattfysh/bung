import { build } from 'bun'

const result = await build({
  outdir: 'dist/api',
  entrypoints: ['./index.ts'],
})

if (!result.success) {
  throw new Error(result.logs)
}
