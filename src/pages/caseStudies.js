import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import CaseStudyPreview from '../components/caseStudyPreview'
import Button from '../components/button'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { CgArrowLongLeft } from 'react-icons/cg'
class CaseStudyIndex extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/')
      }
    }
    const caseStudies = get(this, 'props.data.allContentfulCaseStudies.nodes')

    return (
      <Layout location={this.props.location}>
        <CaseStudyPreview caseStudies={caseStudies} />
        <Button
          onClick={handleClick}
          text="Back To Home Page"
          icon={<CgArrowLongLeft />}
        />
      </Layout>
    )
  }
}

CaseStudyIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default CaseStudyIndex

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
    allContentfulCaseStudies(sort: { fields: updatedAt }) {
      nodes {
        id
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
