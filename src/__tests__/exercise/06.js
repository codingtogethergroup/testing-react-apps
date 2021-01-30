// mocking Browser APIs and modules
// http://localhost:3000/location

import * as React from 'react'
import {render, screen, act} from '@testing-library/react'
import Location from '../../examples/location'

function deferred() {
  let resolve, reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return {promise, resolve, reject}
}

beforeAll(() => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  }
})
test('displays the users current location', async () => {
  const fakePosition = {
    coords: {latitude: 35, longitude: 35},
  }
  const {promise, resolve} = deferred()
  window.navigator.geolocation.getCurrentPosition.mockImplementation(cb => {
    // here, when we call the callback, we are actually trigger an update to teh state.
    // React wasn't sure that we are expecting that to happen
    promise.then(() => cb(fakePosition))
  })

  render(<Location />)

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument()

  await act(async () => {
    resolve()
    await promise
  })

  expect(screen.getByText(/latitude/i).textContent).toMatchInlineSnapshot(
    `"Latitude: 35"`,
  )
  expect(screen.getByText(/longitude/i).textContent).toMatchInlineSnapshot(
    `"Longitude: 35"`,
  )
})
