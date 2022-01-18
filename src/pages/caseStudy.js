import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import CaseStudyPreview from '../components/caseStudyPreview'

class CaseStudyIndex extends React.Component {
  render() {
    const caseStudies = get(this, 'props.data.allContentfulCaseStudies.nodes')

    return (
      <Layout location={this.props.location}>
        <CaseStudyPreview caseStudies={caseStudies} />
      </Layout>
    )
  }
}

export default CaseStudyIndex

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
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
