export default {
    title: 'Why Us Section',
    name: 'whyUsSection',
    type: 'document',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Main Heading',
            name: 'mainHeading',
            type: 'string',
        },
        {
            title: 'Cards',
            name: 'cards',
            type: 'array',
            of: [
                {
                    type: 'whyUsCard',
                },
            ],
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