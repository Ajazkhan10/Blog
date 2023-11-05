export default {
    title: 'Why Us Card',
    name: 'whyUsCard',
    type: 'object',
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'customImage',
            validation: Rule => Rule.required()
        },
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Sub Text',
            name: 'subText',
            type: 'string',
            validation: Rule => Rule.required()
        },
    ],
    preview: {
        select: {
            heading: 'heading',
        },
        prepare({ heading = 'No title' }) {
            return {
                title: heading,
            }
        },
    },
}