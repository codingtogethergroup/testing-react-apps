// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import faker from 'faker'
import Login from '../../components/login'

function buildLoginForm() {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  }
}

test('submitting the form calls onSubmit with username and password', () => {
  const submitHandler = jest.fn()

  render(<Login onSubmit={submitHandler} />)

  const {username, password} = buildLoginForm()

  // simulate the interaction
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  // assertion
  expect(submitHandler).toBeCalledWith({username, password})
  expect(submitHandler).toBeCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
