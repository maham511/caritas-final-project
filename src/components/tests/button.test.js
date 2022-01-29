/**
 * @jest-environment jsdom
 */
import React from 'react'
import ReactDom from 'react-dom'
import { render, fireEvent, queryAllByDisplayValue } from '@testing-library/react'
import { iteratee } from 'lodash'
import Button from '../button'


describe('clickButton', () => {
  it('onClick', () => {
    const { queryByTitle,getByText } = render(<Button text={"mo"} />)
    // const btn = queryByTitle('mainButton')
    getByText("mo")
    // expect(btn.innerHTML).toBe('')
    // fireEvent.click(btn)
    // expect(btn.innerHTML).toBe('')
  })
})

// it('renders without crashing', () => {
//   const div = document.createElement('div')
//   ReactDom.render(<button />, div)
//   ReactDom.unmountComponentAtNode(div)
// })


// describe('clickButton', () => {
//   it('onClick', () => {
//     const { queryByTitle, getByText } = render(
//       <Button text={'See our success stories'} />
//     )
//     const btn = queryAllByDisplayValue('See our success stories')
    
    
//     fireEvent.click(btn)
//     expect(btn.innerHTML).toBe("Home")
//   })
// })

