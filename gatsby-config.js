module.exports = {
  siteMetadata: {
    title: 'Meme Generator',
    description:
      'Generate Memes',
    author: 'Jarod & Craig',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi-gql.now.sh/',
      },
    },
  ],
}
