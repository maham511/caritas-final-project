import React from 'react'
import statsImage from '../../assets/Stats.png'

const Statistics = () => {
  return (
    <div className="flex m-2 bg-gray-200">
      <div className="flex-1 max-w-4xl m-auto">
        <h2 className="text-center mt-6 p-4 w-full">Our Impact on Students</h2>
        <div className="flex flex-col md:flex-row justify-around">
          <div className="bg-white rounded m-2 p-4">
            <div>
              <p>87%</p>
            </div>
            <div>
              <p>
                Students agreed English classes helped them feel less isolated
              </p>
            </div>
          </div>
          <div className="bg-white rounded m-2 p-4">
            <div>
              <p>85%</p>
            </div>
            <div>
              <p>
                Students agreed the program contributed positively to their
                happiness and well-being
              </p>
            </div>
          </div>
          <div className="bg-white rounded m-2 p-4">
            <div>
              <p>90%</p>
            </div>
            <div>
              <p>
                Students that used the education service alongside other Caritas
                services
              </p>
            </div>
          </div>
          {/* <img
            className="m-auto p-4"
            src={statsImage}
            alt="Statistics for student results"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default Statistics
