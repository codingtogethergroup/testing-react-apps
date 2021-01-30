// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', () => {
  const submitHandler = jest.fn()

  render(<Login onSubmit={submitHandler} />)

  const username = 'username'
  const password = 'password'

  // simulate the interaction
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', {name: /submit/i}))

  // assertion
  expect(submitHandler).toBeCalledWith({username, password})
})

/*
eslint
  no-unused-vars: "off",
*/
