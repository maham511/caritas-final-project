import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Home from '../components/home'
import Button from '../components/button'
import { navigate } from 'gatsby'
import { FaRegArrowAltCircleRight } from 'react-icons/fa'

class RootIndex extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/caseStudies')
      }
    }
    return (
      <Layout location={this.props.location}>
        <Home />
        <Button
          onClick={handleClick}
          text="See our success stories"
          icon={<FaRegArrowAltCircleRight />}
        />
      </Layout>
    )
  }
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
