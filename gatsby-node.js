const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    console.log('test');

/*
    const result = await graphql(`
      query {
          defi {
              borrows: tokens(where: {borrowProducts_some: {id_not: null}}) {
                symbol
                name
              }
  
            earns: tokens(where: {earns_some: {id_not: null}}) {
              symbol
              name
            }
            buys: tokens(where: {buys_some: {id_not: null}}) {
              symbol
              name 
            }
          webPages {
            page
            id
          }
          blogs {
            id
            title
          }
          }
        }
      `)

      const { createPage } = actions

      result.data.defi.earns.forEach(({ symbol, name }) => {
        createPage({
          path: `/earn/lending/lending-${name.toLowerCase()}`,
          component: path.resolve(`./src/templates/earn.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            symbol: symbol,
            name: name
          },
        })
      })
*/

      const result2 = await graphql(`
      query {

        
            wordpress {
              posts {
                edges {
                  node {
                    title
                    content
                    slug
                  }
                }
              }
            }
                 

      }
      `)

      const { createPage } = actions

      result2.data.wordpress.posts.edges.forEach(({ node }) => {
        console.log("node.title:");
        console.log(node.title);

        createPage({
            path: `${node.slug}`,
            component: path.resolve(`./src/templates/blogpost.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              title: node.title,
              content: node.content

            },
          })
          
      })
      

}

