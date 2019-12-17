/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "DEFI",
        // This is the field under which it's accessible
        fieldName: "defi",
        // URL to query from
        url: "https://api-useast.graphcms.com/v1/ck15h2e358h5n01czdrz3ay30/master",

      },
      
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "WORDPRESS",
        // This is the field under which it's accessible
        fieldName: "wordpress",
        // URL to query from
        url: "https://dev-defi-content.pantheonsite.io/index.php?graphql",
        refetchInterval: 120,
      }
    }
  ]
}
