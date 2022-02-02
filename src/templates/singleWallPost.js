import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { navigate } from 'gatsby'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

class WallPostTemplate extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/studentWall/')
      }
    }

    const wallPost = get(this.props, 'data.contentfulStudentWall')

    return (
      <Layout location={this.props.location}>
        <div className="grid grid-cols-2 p-2 m-2 sm:w-1/2 p-6 bg-gray-200 rounded-md self-center">
          <div className="w-20 h-20 m-2">
            <GatsbyImage
              className="rounded-full aspect-square border-4 border-red-600 col-start-1 col-end-2"
              alt={wallPost.alt}
              image={wallPost.image.gatsbyImageData}
            />
          </div>
          <div className="order-3 col-span-2 md:col-span-2 grow text-center p-2 pt-6 font-bolder font-black italic leading-loose self-center">
            <div className="flex flex-col">
              <ImQuotesLeft size={20} />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    wallPost.childContentfulStudentWallTestimonialTextNode
                      .childMarkdownRemark.html,
                }}
              />
              <ImQuotesRight size={20} className="self-end" />
            </div>
          </div>
          <div className="order-4 col-start-2 col-end-2 row-start-4 p-4">
            <p className="text-xl md:text-xl">— {wallPost.name}</p>
          </div>
        </div>
        <Button
          className={
            'flex flex-row-reverse self-center bg-red-600 rounded text-sm mt-5 mb-5 m-0 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white hover:bg-transparent hover:text-red-600 hover:font-bold border-4 border-transparent hover:border-red-600 uppercase'
          }
          onClick={handleClick}
          text="Back to Wall Posts"
          icon={<FaRegArrowAltCircleLeft size={30} className="mr-5" />}
          type={'button'}
        />
      </Layout>
    )
  }
}

WallPostTemplate.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default WallPostTemplate

export const pageQuery = graphql`
  query contentfulStudentWallBySlug($slug: String!) {
    contentfulStudentWall(slug: { eq: $slug }) {
      slug
      title
      name
      image {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 450
          height: 450
        )
      }
      childContentfulStudentWallTestimonialTextNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
