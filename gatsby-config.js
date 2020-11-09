module.exports = {
  siteMetadata: {
    title: `Aubrey Wodonga`,
    description: `Drag queen, professional circus artist, and Twitch streamer, it's Aubrey Wodonga!`,
    author: `@oliversw`,
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
    
    },
    
  ],
}
