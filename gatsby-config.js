module.exports = options => ({
  siteMetadata: {
    title: 'Pranjal Portfolio',
    author: {
      name: 'Pranjal Bhatnagar',
      summary:
        'Who lives and works in London, UK. I am a DevOps Engineer/Cloud Architect using Cloud services such as AWS (Amazon Web Services).'
    },
    description: 'A portfolio demonstrating what I can do.',
    siteUrl: 'https://pranjal.uk/',
    social: {
      twitter: 'mdtsk'
    }
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.contentPath || 'Project',
        name: 'Project'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: options.contentPath || 'Blog',
        name: 'Blog'
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 500,
              sizeByPixelDensity: true
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.svg$/
        }
      }
    }
  ]
})
