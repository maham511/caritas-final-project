import React from 'react'
import { Link } from 'gatsby'

const Privacy = () => (
  <div className="p-4 text-center flex flex-col md:flex-row">
    <p>
      Caritas Diocese of Salford &copy; 2022 <span className="pl-1">|</span>
    </p>
    <p>
      <Link
        className="pl-2 rounded hover:text-red-600 hover:underline"
        to="http://www.caritassalford.org.uk/cookie-policy/"
        target="_blank"
      >
        Cookie Policy
      </Link>
      <span className="pl-1">|</span>
      <Link
        className="pl-2 rounded hover:text-red-600 hover:underline"
        to="http://www.caritassalford.org.uk/privacy-policy/"
        target="_blank"
      >
        Privacy Policy
      </Link>
    </p>
  </div>
)

export default Privacy
