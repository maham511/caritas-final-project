import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '../button'

describe('clickButton', () => {
  it('renders the text correctly from props', () => {
    render(<Button text="homepage" />)
    const btn = screen.getByTestId('main-button')
    expect(btn).toHaveTextContent('homepage')
  })
})
