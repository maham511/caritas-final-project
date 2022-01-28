import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

const Carousel = ({ data }) => {
  const allImages = data.allContentfulImages.nodes
  return (
    <div>
      {allImages.map((node) => (
        <ul key={node.id}>
          <li>
            <GatsbyImage image={node.image.gatsbyImageData} alt={node.alt} />
          </li>
        </ul>
      ))}
    </div>
  )
}

export default function MyCarousel(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulImages {
            nodes {
              id
              title
              slug
              alt
              image {
                gatsbyImageData(layout: FULL_WIDTH, width: 424, height: 212)
              }
            }
          }
        }
      `}
      render={(data) => <Carousel data={data} {...props} />}
    />
  )
}

Carousel.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.node.isRequired,
}
