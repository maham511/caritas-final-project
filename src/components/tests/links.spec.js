import React from 'react'
import { render} from '@testing-library/react'
import Links from '../Footer/links'

describe('testing links component', () => {
  const renderComponent = () => render(<Links />)

  it('should render successfully', () => {
    const { baseElement } = renderComponent()
    expect(baseElement).toBeTruthy()
  })

  it('should have three links of social media', () => {
    const { getAllByRole } = renderComponent()
    const [email, twitter, facebook] = getAllByRole('link')
    const isLocal = process.env.NODE_ENV =="test"
    const expectedEmailLink =
      (isLocal ? 'http://localhost/' : '') +
      'mailto:refugeeeduction@caritassalford.org.uk'
     
    expect(email).toHaveProperty('href', expectedEmailLink)

    expect(twitter).toHaveProperty('href', 'https://twitter.com/CaritasSalford')

     expect(facebook).toHaveProperty(
       'href',
       'https://www.facebook.com/CaritasSalford/'
     )
  })
})
