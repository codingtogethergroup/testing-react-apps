// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  const {container} = render(<Counter />)
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const increment = screen.getByRole('button', {name: /increment/i})
  const count = screen.getByText(/current count/i)

  expect(count).toHaveTextContent('Current count: 0')
  fireEvent.click(increment)
  expect(count).toHaveTextContent('Current count: 1')

  fireEvent.click(decrement)
  expect(count).toHaveTextContent('Current count: 0')
})
