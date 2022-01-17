const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for case studies
  const caseStudyTemplate = path.resolve('./src/templates/singleCaseStudy.js')

  const result = await graphql(
    `
      {
        allContentfulCaseStudy {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const caseStudies = result.data.allContentfulCaseStudy.nodes

  // Create case study pages
  // But only if there's at least one case study found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (caseStudies.length > 0) {
    caseStudies.forEach((caseStudy, index) => {
      createPage({
        path: `/caseStudy/${caseStudy.slug}/`,
        component: caseStudyTemplate,
        context: {
          slug: caseStudy.slug,
        },
      })
    })
  }
}
