import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import get from 'lodash/get'
import CaseStudyButton from '../components/caseStudyButton'
class CaseStudyTemplate extends React.Component {
  render() {
    const caseStudy = get(this.props, 'data.contentfulCaseStudies')

    return (
      <Layout location={this.props.location}>
        <div>
          <h2>{caseStudy.title}</h2>
          <h4>{caseStudy.name}</h4>
          <GatsbyImage alt="" image={caseStudy.image.gatsbyImageData} />
          <p>{caseStudy.story.internal.content}</p>
        </div>
        <div>
          <CaseStudyButton />
        </div>
      </Layout>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query contentfulCaseStudyBySlug($slug: String!) {
    contentfulCaseStudies(slug: { eq: $slug }) {
      slug
      title
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
    }
  }
`
