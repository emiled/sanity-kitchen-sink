export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3c53cd0a2d5200919a8680',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8qdgh5cg',
                  apiId: '708ee061-2f07-4e51-9493-ef09d8cc411a'
                },
                {
                  buildHookId: '5f3c53cd39db860122651c1b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ph98jcab',
                  apiId: '0aab6308-87d8-4c25-b12b-375b2da3168c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emiled/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ph98jcab.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
