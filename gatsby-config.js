/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "DrSavkovic dental office",
    description: "DrSavkovic dental office",
    titleTemplate: `%s | DrSavkovic dental office`,
    keywords: `stomatologija, stomatolog, stomatoloska ordinacija, zubar, protetika, ortodoncija, endodoncija, popravka zuba, izbeljivanje zuba, medakovic, folije za zube`,
    siteUrl: `https://drsavkovic.rs`,
    image: `/Logo.svg`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: "/sitemap.xml",
    //   },
    // },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ["blog.js"],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `h07ic2otmqlu`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
    `gatsby-plugin-transition-link`,
    // {
    //   resolve: `gatsby-plugin-react-intl`,
    //   options: {
    //     // language JSON resource path
    //     path: `${__dirname}/src/intl`,
    //     // supported language
    //     languages: [`sr`, `en`],
    //     // language file path
    //     defaultLanguage: `sr`,
    //     // option to redirect to `/ko` when connecting `/`
    //     redirect: false,
    //     // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
    //     redirectDefaultLanguageToRoot: false,
    //     // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
    //     ignoredPaths: ["/blog/**"],
    //     // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
    //     fallbackLanguage: `sr`,
    //   },
    // },
  ],
}
