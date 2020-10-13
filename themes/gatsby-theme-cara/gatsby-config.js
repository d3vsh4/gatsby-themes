module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Arduino Project`,
    siteTitleAlt: `Arduino Project`,
    siteHeadline: `Arduino Project`,
    siteUrl: ``,
    siteDescription: `Arduino Project`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `devanshu`,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
})
