/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Fit Posilki",
    description: "Zdrowe i proste przepisy",
    author: "@KrzysztofHum",
    person: { name: "Krzysztof", age: 25 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "Krzysztof", age: 25 },
      { name: "Justa", age: 24 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
