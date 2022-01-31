import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Home from '../components/Home'
import Button from '../components/Button'
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
          className={
            'flex flex-col bg-red-600 hover:bg-red-400 rounded text-sm mt-5 mb-5 m-0 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white uppercase'
          }
          onClick={handleClick}
          text="See our success stories"
          icon={<FaRegArrowAltCircleRight />}
          type={'button'}
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
