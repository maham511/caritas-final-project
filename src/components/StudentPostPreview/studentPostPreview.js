import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const StudentPostPreview = ({ studentWallPosts }) => {
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
            <li className="flex-1 bg-white rounded" key={wallPost.id}>
              <Link
                className="flex flex-col h-full hover:text-OnHoverColor transition ease-out duration-500 hover:shadow-2xl"
                to={`/studentWall/${wallPost.slug}`}
              >
                <h2 className="flex-1 text-center text-base mt-5 m-5 font-extrabold">
                  {wallPost.title}
                </h2>

                <div className="grow items-stretch h-full p-2 m-2 border border-gray-400 rounded">
                  <p>
                    {
                      wallPost.childContentfulStudentWallTestimonialTextNode
                        .childMarkdownRemark.excerpt
                    }
                  </p>
                </div>
                <div className="flex w-full bg-red-600 rounded">
                  <div className="w-10 h-10 m-2">
                    <GatsbyImage
                      className="rounded-full aspect-square"
                      alt={wallPost.alt}
                      image={wallPost.image.gatsbyImageData}
                    />
                  </div>
                  <div>
                    <h4 className="text-center p-5 font-bold text-white">
                      {wallPost.name}
                    </h4>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

StudentPostPreview.propTypes = {
  studentWallPosts: PropTypes.any.isRequired,
}

export default StudentPostPreview
