import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

class CaseStudyTemplate extends React.Component {
  render() {
    const caseStudy = get(this.props, 'data.contentfulCaseStudy')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <h2>{caseStudy.title}</h2>
        <div>
          <Tags tags={caseStudy.tags} />
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
          )}
        </div>
      </Layout>
    )
  }
}

export default CaseStudyTemplate

// export const pageQuery = graphql`
//   query CaseStudyBySlug(
//     $slug: String!
//     $previousPostSlug: String
//     $nextPostSlug: String
//   ) {
//     contentfulCaseStudy(slug: { eq: $slug }) {
//       slug
//       title
//       tags
//       description {
//         childMarkdownRemark {
//           excerpt
//         }
//       }
//     }
//     previous: contentfulCaseStudy(slug: { eq: $previousPostSlug }) {
//       slug
//       title
//     }
//     next: contentfulCaseStudy(slug: { eq: $nextPostSlug }) {
//       slug
//       title
//     }
//   }
// `
