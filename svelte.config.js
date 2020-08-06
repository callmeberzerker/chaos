import vercelAdapter from '@sveltejs/adapter-vercel'
import md from 'mdsvex'
import preprocess from 'svelte-preprocess'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [md.mdsvex(mdsvexConfig), preprocess()],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: vercelAdapter(),
    prerender: {
      force: true,
    },
  },
}

export default config
