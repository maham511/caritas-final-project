import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const CaseStudyPreview = ({ caseStudies }) => {
  if (!caseStudies) return null
  if (!Array.isArray(caseStudies)) return null
  return (
    <div className="bg-dark-grey p-2 m-2">
      <h1 className="text-center text-2xl pt-5 p-10 md:text-4xl text-white">
        Our Case Studies
      </h1>
      <ul className="grid grid-cols-1 p-2 sm:grid-cols-2 p-2 gap-4 md:grid-cols-3 gap-8 bg-dark-grey rounded">
        {caseStudies.map((caseStudy) => {
          return (
            <li className="flex bg-white rounded" key={caseStudy.id}>
              <Link
                className="flex flex-col hover:text-textOnhover transition ease-out duration-500 hover:shadow-2xl"
                to={`/caseStudies/${caseStudy.slug}`}
              >
                <GatsbyImage
                  alt={caseStudy.alt}
                  image={caseStudy.image.gatsbyImageData}
                />
                <h2 className="flex-1 text-center text-base mt-5 m-5">
                  {caseStudy.title}
                </h2>
                <h4 className="text-center p-5 font-bold">{caseStudy.name}</h4>
                <div className="grow p-5 m-5 border border-gray-400 rounded">
                  <p>
                    {
                      caseStudy.childContentfulCaseStudiesStoryTextNode
                        .childMarkdownRemark.excerpt
                    }
                  </p>
                  <span className="mt-2">Read More</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CaseStudyPreview.propTypes = {
  caseStudies: PropTypes.any.isRequired,
}

export default CaseStudyPreview
