import * as React from 'react'
import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

test('allow customization of the initial count', () => {
  let result = null
  function FakeComponent({initialCount}) {
    result = useCounter({initialCount})
    return null
  }
  render(<FakeComponent initialCount={3} />)

  expect(result.count).toBe(3)

  act(() => result.increment())
  expect(result.count).toBe(4)

  act(() => result.decrement())
  expect(result.count).toBe(3)
})

test('allow customization of the step', () => {
  let result = null
  function FakeComponent({step}) {
    result = useCounter({step})
    return null
  }
  render(<FakeComponent step={3} />)

  expect(result.count).toBe(0)

  act(() => result.increment())
  expect(result.count).toBe(3)

  act(() => result.decrement())
  expect(result.count).toBe(0)
})

/* eslint no-unused-vars:0 */
