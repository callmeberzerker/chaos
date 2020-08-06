import fs from 'fs'

const obj = {
  functions: {
    'node/render': {
      includeFiles: 'src/posts/**',
    },
  },
}

fs.writeFileSync('.vercel_build_output/config/functions.json', JSON.stringify(obj, null, 2))
