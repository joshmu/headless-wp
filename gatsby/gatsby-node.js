const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      menuPrimary: wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            id
            label
            url
            path
          }
        }
      }
      menuSecondary: wpMenu(slug: { eq: "footer-menu" }) {
        menuItems {
          nodes {
            id
            label
            url
            path
          }
        }
      }
      allWpPage {
        edges {
          node {
            content
            date
            id
            link
            title
            slug
          }
        }
      }
      allWpPost {
        edges {
          node {
            content
            date
            id
            link
            title
            slug
          }
        }
      }
    }
  `)
  console.log(JSON.stringify(result, null, 2))

  // generate pages
  result.data.allWpPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/page.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // generate posts
  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `posts/${node.slug}`,
      component: path.resolve('./src/templates/post.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        // * just passing all the data directly to the post page
        // * not bothering with graphql call on the other side (compare page vs post templates)
        ...node,
      },
    })
  })
}
