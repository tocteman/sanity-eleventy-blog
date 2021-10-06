export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '615dec3916ba4d0922e36f83',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-oiz8mgmd',
                  apiId: 'a88da4f4-4109-4bbe-b3b3-1776e037e098'
                },
                {
                  buildHookId: '615dec3926fc3809289af894',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4ckicjvg',
                  apiId: '8fb139e0-accf-40de-bd73-844026ff55e5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tocteman/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4ckicjvg.netlify.app', category: 'apps'}
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
