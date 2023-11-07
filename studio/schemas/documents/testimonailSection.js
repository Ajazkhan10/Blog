export default {
    title: 'Testimonials Section',
    name: 'testimonialsSection',
    type: 'document',
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
            title: 'Cards',
            name: 'cards',
            type: 'array',
            of: [{ type: 'testimonialCard' }],
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