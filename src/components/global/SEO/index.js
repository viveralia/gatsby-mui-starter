import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import SchemaOrg from './SchemaOrg'

// -------------------
// GraphQL query 🚀
// -------------------
const graphqlQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        image
        author
        siteUrl
        organization {
          name
          url
          logo
        }
      }
    }
  }
`

// -------------------
// Main Component 🧱
// -------------------
const SEO = ({ pageImage, pageMeta, isBlogPost }) => {
  const { pageTitle, pageDescription, pageSlug } = pageMeta

  const { site } = useStaticQuery(graphqlQuery)

  const title = pageTitle
    ? `${pageTitle} | ${site.siteMetadata.organization.name}`
    : `${site.siteMetadata.title} | ${site.siteMetadata.organization.name}`
  const description = pageDescription || site.siteMetadata.description
  const image = pageImage || site.siteMetadata.image
  const url = pageSlug
    ? `${site.siteMetadata.siteUrl}/${pageSlug}`
    : site.siteMetadata.siteUrl
  const datePublished = false

  return (
    <>
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <link rel="canonical" href={url} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isBlogPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        siteUrl={site.siteMetadata.siteUrl}
        author={site.siteMetadata.author}
        organization={site.siteMetadata.organization}
        defaultTitle={site.siteMetadata.title}
      />
    </>
  )
}

// -------------------
// PropTypes 📔
// -------------------
SEO.propTypes = {
  pageImage: PropTypes.string,
  pageMeta: PropTypes.shape({
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string,
    pageSlug: PropTypes.string,
  }),
  isBlogPost: PropTypes.bool,
}

SEO.defaultProps = {
  pageImage: null,
  pageMeta: {
    pageTitle: null,
    pageDescription: null,
    pageSlug: null,
  },
  isBlogPost: false,
}

export default SEO
