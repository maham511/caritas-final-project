import React from 'react'
import { Link } from 'gatsby'

const Privacy = () => (
  <div className="p-4 text-center">
    <p>
      Caritas Diocese of Salford &copy; 2022 <span className='pl-1' >|</span> 
      <Link
        className="pl-2"
        to="http://www.caritassalford.org.uk/cookie-policy/"
      >
        Cookie Policy
      </Link>
      <Link
        className="pl-2"
        to="http://www.caritassalford.org.uk/privacy-policy/"
      >
        Privacy Policy
      </Link>
    </p>
  </div>
)

export default Privacy
