export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '6225180d90d3cede362cbbe0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7r8sa6wi',
                  apiId: '2316cc36-10ae-49e6-9f4b-9abc30511c1d'
                },
                {
                  buildHookId: '6225180d2b0fcce21ea48405',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zjt3w7c6',
                  apiId: '603bce7d-4cb6-4f96-9314-e4195e96ce4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RADesigns/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zjt3w7c6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
