require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: process.env.GATSBY_SITE_TITLE || "Domyślny tytuł",
    description: process.env.GATSBY_SITE_DESCRIPTION || "Domyślny opis",
    siteUrl: process.env.GATSBY_SITE_URL || "https://www.yourdomain.tld",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID || "q46bplag",
        dataset: process.env.SANITY_DATASET || "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss", // To wystarczy - nie potrzebuje dodatkowych opcji
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          process.env.GATSBY_GTM_ID || "GTM-KHPJQHND"
        ],
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    
  ],
}