module.exports = {
  siteMetadata: {
    title: `Profesionálne brúsenie korčúľ v Bratislave`,
    description: `Sme firma, ktorá sa stará o profesionálne brúsenie korčúľ v Bratislave. Moderná technológia nám poskytuje brúsiť a dezinfikovať korčule od 4€. `,
    author: `Sebastián Vašš`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/index.html`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        lang: `sk`,
        display: `minimal-ui`,
        icon: `src/images/Logo.png`, 
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56499813-2",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        "displayName": false
      },
    },
  ],
}
