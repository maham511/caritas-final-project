import PropTypes from 'prop-types'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const StudentWallPost = ({ studentWallPosts }) => {
  if (!studentWallPosts) return null
  if (!Array.isArray(studentWallPosts)) return null
  return (
    <div className="p-2 m-2">
      <h1 className="text-center text-2xl pt-5 p-10 md:text-4xl">
        Student Wall
      </h1>
      <ul className="grid grid-cols-1 p-2 sm:grid-cols-2 p-2 gap-4 md:grid-cols-3 gap-8 bg-gray-200 rounded">
        {studentWallPosts.map((wallPost) => {
          return (
            <li
              className="flex flex-col
             bg-white rounded hover:text-OnHoverColor hover:transition ease-out duration-500 hover:shadow-2xl
             hover:text-lg"
              key={wallPost.id}
            >
              <div className="w-10 h-10 m-2">
                <GatsbyImage
                  className="rounded-full aspect-square"
                  alt={wallPost.alt}
                  image={wallPost.image.gatsbyImageData}
                />
              </div>
              <div
                className="flex flex-1 font-bolder font-black italic
              bg-blend-darken leading-loose items-center hover:text-OnHoverColor transition ease-out duration-500"
              >
                <div className="flex flex-col grow items-stretch p-2 m-2">
                  <ImQuotesLeft size={20} />
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        wallPost.childContentfulStudentWallTestimonialTextNode
                          .childMarkdownRemark.html,
                    }}
                  />
                  <ImQuotesRight size={20} className="flex self-end" />
                </div>
              </div>
              <div className="flex rounded justify-end">
                <h4 className="text-center p-5 font-bold">- {wallPost.name}</h4>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

StudentWallPost.propTypes = {
  studentWallPosts: PropTypes.any,
}

export default StudentWallPost
