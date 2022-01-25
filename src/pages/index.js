import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Home from '../components/home'
class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Home />
      </Layout>
    )
  }
}

RootIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulCaseStudies(sort: { fields: updatedAt }) {
      nodes {
        title
        slug
        name
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        story {
          internal {
            content
          }
        }
        childContentfulCaseStudiesStoryTextNode {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
