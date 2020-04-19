module.exports = {
  siteMetadata: {
    title: 'Gatsby MUI Starter',
    author: 'espacioenblan.co',
    siteUrl: 'https://espacioenblan.co',
    image: '/cover.jpg',
    description:
      'A ready to rock starter for Gatsby built on top of Hello World starter.',
    organization: {
      name: 'Espacio en blanco',
      url: 'https://espacioenblan.co',
      logo: '/logo.png',
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/global/Layout/index.js`),
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-material-ui`,
  ],
}
