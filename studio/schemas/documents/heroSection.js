export default {
  title: 'Hero Sections',
  name: 'heroSections',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },

  ],
  preview: {
    select: {
      title: 'identifier',
    },
    prepare({ title = 'No title' }) {
      return {
        title,
      }
    },
  },
}
