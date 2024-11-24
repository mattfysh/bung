import { type BunPlugin, plugin } from 'bun'

console.log('registering plugin...')

export const myPlugin: BunPlugin = {
  name: 'test',
  setup(build) {
    build.onResolve({ filter: /.*/ }, args => {
      console.log('RESOLVE', args)
      return undefined
    })

    build.onLoad({ filter: /.*/ }, args => {
      console.log('LOAD', args)
      return undefined
    })
  },
}

plugin(myPlugin)
