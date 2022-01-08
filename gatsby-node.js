const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {data} = await graphql(`
    query PlantPages {
      allContentfulEntry {
        edges {
          node {
            id
            ... on ContentfulPlant {
              slug
            }
          }
        }
      }
    }
   `)

    data.allContentfulEntry.edges.forEach(edge => actions.createPage({
        path: '/plant/' + edge?.node?.slug || '',
        component: path.resolve('./src/templates/PlantDetails.js'),
        context: {id: edge?.node?.id},
        defer: false, // this adds building only when it's reached
    }))
}
