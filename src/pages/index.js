import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const caseStudies = get(this, 'props.data.allContentfulCaseStudy.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview caseStudies={caseStudies} />
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
