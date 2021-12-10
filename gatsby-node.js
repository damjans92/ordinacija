const path = require("path")

exports.createPages = async ({ graphql, actions, page }) => {
  const { createPage, deletePage } = actions

  if (process.env.NODE_ENV === `development`) {
    const result = await graphql(`
      {
        allContentfulBlogPost {
          nodes {
            slug
          }
        }
      }
    `)

    result.data.allContentfulBlogPost.nodes.forEach(blogPost => {
      const slug = blogPost.slug
      createPage({
        path: `/blog/${slug}`,
        component: path.resolve(`src/templates/blog-post.js`),
        context: {
          slug: slug,
        },
      })
    })
  }
}
