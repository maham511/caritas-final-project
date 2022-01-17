import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import CaseStudyPreview from '../components/caseStudyPreview'
import Home from '../components/home'
class RootIndex extends React.Component {
  render() {
    const caseStudies = get(this, 'props.data.allContentfulCaseStudy.nodes')

    return (
      <Layout location={this.props.location}>
        {/* To do: need to change it so case studies only show on case study slug */}
        <Home />
        <CaseStudyPreview caseStudies={caseStudies} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulCaseStudy(sort: { fields: updatedAt }) {
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
        childContentfulCaseStudyStoryTextNode {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
