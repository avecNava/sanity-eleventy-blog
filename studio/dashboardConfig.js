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
                  buildHookId: '6084d58c4165ec7dd856c800',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-pjg7nyr1',
                  apiId: 'bba31a56-b317-40c3-bc3d-7953f08faebb'
                },
                {
                  buildHookId: '6084d58c1c0e1d864c523696',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-16ocpsmz',
                  apiId: 'e7a1baed-d551-4d7f-b080-3a6c109073d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/avecNava/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-16ocpsmz.netlify.app', category: 'apps'}
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
