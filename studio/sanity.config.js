import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { myStructure } from './deskStructure'
import BrandLogo from './src/logo/logo.jsx'

export default defineConfig({
  name: 'blog_site',

  projectId: 'n02rkyus',
  dataset: 'production',
  studio: {
    components: {
      logo: BrandLogo,
    },
  },
  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
