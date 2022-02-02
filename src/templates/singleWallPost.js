import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import { navigate } from 'gatsby'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

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
        <div className="grid grid-cols-1 p-2 m-2 md:grid-cols-2 p-6 bg-gray-200 rounded-md">
          <div className="order-1 col-span-1 mb-4 md:col-span-2 text-center py-4">
            <h2>{wallPost.title}</h2>
          </div>
          <div className="order-2 col-span-1 justify-end">
            <GatsbyImage
              alt={wallPost.alt}
              image={wallPost.image.gatsbyImageData}
            />
          </div>
          <div className="order-3 col-span-1 p-4 border-8 border-double border-red-600">
            <h2 className="text-xl md:text-3xl">{wallPost.name}</h2>
          </div>
          <div className="order-4 col-span-1 md:col-span-2 grow text-center p-2 pt-6 font-bold">
            <p>{wallPost.testimonial.internal.content}</p>
          </div>
        </div>
        <Button
          className={
            'flex flex-row-reverse bg-red-600 hover:bg-red-400 rounded text-sm mt-5 mb-5 m-0 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white uppercase'
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
          width: 424
          height: 212
        )
      }
      testimonial {
        internal {
          content
        }
      }
    }
  }
`
