export default {
    title: 'Testimonial Card',
    name: 'testimonialCard',
    type: 'object',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
        },
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Sub Text',
            name: 'subText',
            type: 'bodyPortableText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Image',
            name: 'image',
            type: 'customImage',
        },
        {
            title: 'Icon',
            name: 'icon',
            type: 'customImage',
        },
    ],
    preview: {
        select: {
            title: 'identifier',
        },
        prepare({ title = 'No title' }) {
            return {
                title: title,
            }
        },
    },
}