import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
//import Tags from './tags'

const ArticlePreview = ({ caseStudies }) => {
  if (!caseStudies) return null
  if (!Array.isArray(caseStudies)) return null

  return (
    <Container>
      <ul>
        {caseStudies.map((caseStudy) => {
          return (
            <li>
              <Link to={`/caseStudy/${caseStudy.slug}`}>
                <h2>{caseStudy.title}</h2>
                <h4>{caseStudy.name}</h4>
                <GatsbyImage alt="" image={caseStudy.image.gatsbyImageData} />
              </Link>
              <p>
                {
                  caseStudy.childContentfulCaseStudyStoryTextNode
                    .childMarkdownRemark.excerpt
                }
              </p>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
