import React from 'react'

const Statistics = () => {
  return (
    <div className="flex m-2 bg-gray-200">
      <div className="flex-1 max-w-4xl m-auto mb-6">
        <h2 className="text-center mt-6 p-4 w-full">Our Impact on Students</h2>
        <div className="grid grid-cols-1 p-2 md:gap-4 md:grid-cols-3 md:text-center">
          <div className="m-2 p-4 bg-red-600 text-white rounded">
            <p className="text-2xl md:text-4xl font-extrabold pb-2">87%</p>
            <p>
              Students agreed English classes helped them feel less isolated
            </p>
          </div>
          <div className="m-2 p-4 bg-red-600 text-white rounded">
            <p className="text-2xl md:text-4xl font-extrabold pb-2">85%</p>
            <p>
              Students agreed the program contributed positively to their
              happiness and well-being
            </p>
          </div>
          <div className="m-2 p-4 bg-red-600 text-white rounded">
            <p className="text-2xl md:text-4xl font-extrabold pb-2">90%</p>
            <p>
              Students used the education service alongside other Caritas
              services
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics
