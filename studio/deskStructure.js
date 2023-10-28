const BLOG_SITE_SECTIONS = [
  {
    sectionType: 'heroSections',
    sectionTitle: 'Hero Sections',
  },

]

const BLOG_SITE_TEMPLATE = [
  {
    templateType: 'pages',
    templateTitle: 'Pages',
  },

]

export const myStructure = (S) =>
  S.list()
    .title('Websites')
    .items([
      S.listItem()
        .title('blog Site')
        .child(
          S.list()
            .title('Blog Site')
            .items([
              S.listItem()
                .title('Sections')
                .child(
                  S.list()
                    .title('Sections')
                    .items(
                      BLOG_SITE_SECTIONS.map((section) => {
                        return S.listItem()
                          .title(section.sectionTitle)
                          .child(S.documentTypeList(section.sectionType))
                      })
                    )
                ),
              S.listItem()
                .title('Templates')
                .child(
                  S.list()
                    .title('Templates')
                    .items(
                      BLOG_SITE_TEMPLATE.map((section) => {
                        return S.listItem()
                          .title(section.templateTitle)
                          .child(S.documentTypeList(section.templateType))
                      })
                    )
                ),
            ])
        ),
      S.divider(),
    ])
