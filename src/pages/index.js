import React, { useState } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Home from '../components/home'
import Button from '../components/button'
import { navigate } from 'gatsby'
import { CgArrowLongRight } from 'react-icons/cg'
const RootIndex = () => {
  function handleClick(event) {
    event.preventDefault()
    {
      navigate('/caseStudies')
    }
  }

  return (
    <Layout location={location}>
      <Home />
      <Button
        onClick={handleClick}
        value="Case Studies"
        icon={<CgArrowLongRight />}
      />
    </Layout>
  )
}

RootIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulCaseStudies(sort: { fields: updatedAt }) {
      nodes {
        title
        slug
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
        childContentfulCaseStudiesStoryTextNode {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
