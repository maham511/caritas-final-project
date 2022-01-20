import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import CaseStudyPreview from '../components/caseStudyPreview'
import HomePageButton from '../components/homePageButton'
import PropTypes from 'prop-types'

class CaseStudyIndex extends React.Component {
  render() {
    const caseStudies = get(this, 'props.data.allContentfulCaseStudies.nodes')

    return (
      <Layout location={this.props.location}>
        <CaseStudyPreview caseStudies={caseStudies} />
        <HomePageButton />
      </Layout>
    )
  }
}

CaseStudyIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default CaseStudyIndex

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
    allContentfulCaseStudies(sort: { fields: updatedAt }) {
      nodes {
        id
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
