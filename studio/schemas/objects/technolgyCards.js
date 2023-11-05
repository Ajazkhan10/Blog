export default {
    title: 'Technolgy Cards',
    name: 'technolgyCards',
    type: 'object',
    fields: [
        {
            title: 'Identifier',
            name: 'identifier',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'customImage',
        },
        {
            title: 'Technology URL',
            name: 'technologyUrl',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'identifier',
        },
    },

}
