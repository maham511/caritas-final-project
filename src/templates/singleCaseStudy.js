import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import get from 'lodash/get'

class CaseStudyTemplate extends React.Component {
  render() {
    const caseStudy = get(this.props, 'data.contentfulCaseStudy')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <div>
          <h2>{caseStudy.title}</h2>
          <h4>{caseStudy.name}</h4>
          <GatsbyImage alt="" image={caseStudy.image.gatsbyImageData} />
          <p>{caseStudy.story.internal.content}</p>
          {/* <Tags tags={caseStudy.tags} />
          {(previous || next) && (
            <nav>
              <ul>
                {previous && (
                  <li>
                    <Link to={`/caseStudy/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/caseStudy/${next.slug}`} rel="next">
                      {next.title} →
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )} */}
        </div>
      </Layout>
    )
  }
}

export default CaseStudyTemplate

export const pageQuery = graphql`
  query contentfulCaseStudyBySlug($slug: String!) {
    contentfulCaseStudy(slug: { eq: $slug }) {
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
// previous: contentfulCaseStudy(slug: { eq: $previousCaseStudySlug }) {
//   slug
//   title
// }
// next: contentfulCaseStudy(slug: { eq: $nextCaseStudySlug }) {
//   slug
//   title
// }
