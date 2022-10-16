import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Mantine Extension',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-mantine',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: `${__dirname}/src/components/Layout/Layout`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
