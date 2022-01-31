import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../button'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

 describe('testing main button', () => {
  const props = {
    text: 'home page',
    icon: `${(<FaRegArrowAltCircleLeft />)}`,
    onClick: () => {},
  }
  const renderComponent = () => render(<Button {...props} />)

  it('render successfuly', () => {
    const { baseElement } = renderComponent()
    expect(baseElement).toBeTruthy()
  })

  it('render text successfully', () => {
    const { getByText } = renderComponent()
    expect(getByText(props.text)).toBeVisible()
  })
})

