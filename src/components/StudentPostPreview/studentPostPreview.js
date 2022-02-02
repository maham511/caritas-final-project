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
            <li className="flex bg-white rounded" key={wallPost.id}>
              <Link
                className="flex flex-col hover:text-OnHoverColor transition ease-out duration-500 hover:shadow-2xl"
                to={`/studentWall/${wallPost.slug}`}
              >
                <GatsbyImage
                  alt={wallPost.alt}
                  image={wallPost.image.gatsbyImageData}
                />
                <h2 className="flex-1 text-center text-base mt-5 m-5">
                  {wallPost.title}
                </h2>
                <h4 className="text-center p-5 font-bold">{wallPost.name}</h4>
                <div className="grow p-5 m-5 border border-gray-400 rounded">
                  <p>{wallPost.testimonial.internal.content}</p>
                  <span className="mt-2">Read More</span>
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
