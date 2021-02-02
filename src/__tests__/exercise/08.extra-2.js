import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

function setup({initialProps} = {}) {
  const result = {}
  function TestComponent() {
    result.current = useCounter(initialProps)
    return null
  }
  render(<TestComponent />)
  return result
}

test('allow customization of the initial count', () => {
  const initialProps = {initialCount: 3}
  const result = setup({initialProps})

  expect(result.current.count).toBe(3)

  act(() => result.current.increment())
  expect(result.current.count).toBe(4)

  act(() => result.current.decrement())
  expect(result.current.count).toBe(3)
})

test('allow customization of the step', () => {
  const result = setup({
    initialProps: {step: 3},
  })
  expect(result.current.count).toBe(0)

  act(() => result.current.increment())
  expect(result.current.count).toBe(3)

  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

/* eslint no-unused-vars:0 */
