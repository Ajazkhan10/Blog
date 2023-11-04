export default {
    title: 'Technolgy Section',
    name: 'technolgySection',
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
            of: [
                {
                    type: 'technolgyCards',
                }
            ],
        },
    ],
    preview: {
        select: {
            title: 'identifier',
        },
    },

}
