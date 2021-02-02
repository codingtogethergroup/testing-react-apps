import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import useCounter from '../../components/use-counter'

function UseCounterExample() {
  const {count, increment, decrement} = useCounter()
  return (
    <div>
      <h4>Current count:{count}</h4>
      <p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </p>
    </div>
  )
}

test('exposes the count and increment/decrement functions', () => {
  render(<UseCounterExample />)
  const incrementBtn = screen.getByRole('button', {name: /increment/i})
  const decrementBtn = screen.getByRole('button', {name: /decrement/i})
  const msg = screen.getByText(/current count/i)

  expect(msg).toHaveTextContent('Current count:0')

  userEvent.click(incrementBtn)
  expect(msg).toHaveTextContent('Current count:1')

  userEvent.click(decrementBtn)
  expect(msg).toHaveTextContent('Current count:0')
})

/* eslint no-unused-vars:0 */
