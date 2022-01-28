import React from 'react'
import { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from './button'

let count = 0

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const allImages = data.allContentfulImages.nodes
  console.log(allImages)
  const handleOnNextClick = () => {
    count = (count + 1) % allImages.length
    setCurrentIndex(count)
  }

  const handleOnPreviousClick = () => {
    const imagesLength = allImages.length
    count = (currentIndex + imagesLength - 1) % imagesLength
    setCurrentIndex(count)
  }

  return (
    <div>
      <div className="aspect-w-16 aspect-h-9">
        <GatsbyImage
          image={allImages[currentIndex].image.gatsbyImageData}
          alt={allImages[currentIndex].alt}
        />
      </div>
      <div className="flex justify-between items-center">
        <Button text="Previous" onClick={handleOnPreviousClick} />
        <Button text="Next" onClick={handleOnNextClick} />
      </div>
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
  data: PropTypes.any.isRequired,
}
