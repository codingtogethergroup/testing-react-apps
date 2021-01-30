import * as React from 'react'
import Counter from '../../components/counter'
import {fireEvent, render} from '@testing-library/react'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  const [decrement, increment] = container.querySelectorAll('button')
  const textContent = container.firstElementChild.querySelector('div')
  expect(textContent).toHaveTextContent('Current count: 0')

  // click increment button
  fireEvent.click(increment)
  expect(textContent).toHaveTextContent('Current count: 1')

  // click decrement button
  fireEvent.click(decrement)
  expect(textContent).toHaveTextContent('Current count: 0')
})
