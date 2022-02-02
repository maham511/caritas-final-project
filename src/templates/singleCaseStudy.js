import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { navigate } from 'gatsby'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

class CaseStudyTemplate extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/caseStudies/')
      }
    }

    const caseStudy = get(this.props, 'data.contentfulCaseStudies')
    return (
      <Layout location={this.props.location}>
        <div className="grid grid-cols-1 p-2 m-2 md:grid-cols-2 p-6 bg-gray-200">
          <div className="order-1 col-span-1 mb-4 md:col-span-2 text-center py-4">
            <h2>{caseStudy.name}</h2>
          </div>
          <div className="order-2 col-span-1 rounded-t-md">
            <GatsbyImage
              className="rounded-t md:rounded-tl"
              alt=""
              image={caseStudy.image.gatsbyImageData}
            />
          </div>
          <div className="order-3 col-span-1 p-4 bg-red-600 text-white md:rounded-tr">
            <h2 className="text-xl md:text-2xl text-center">
              {caseStudy.title}
            </h2>
          </div>
          <div className="order-4 col-span-1 md:col-span-2 grow p-12 leading-loose bg-white rounded-b">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  caseStudy.childContentfulCaseStudiesStoryTextNode
                    .childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <Button
          className={
            'flex flex-row-reverse self-center bg-red-600 rounded text-sm mt-5 mb-5 m-0 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white hover:bg-transparent hover:text-red-600 hover:font-bold border-4 border-transparent hover:border-red-600 uppercase'
          }
          onClick={handleClick}
          text="Back To Case Studies"
          icon={<FaRegArrowAltCircleLeft size={30} className="mr-5" />}
          type={'button'}
        />
      </Layout>
    )
  }
}

CaseStudyTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
      childContentfulCaseStudiesStoryTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
