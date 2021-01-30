// mocking HTTP requests
// http://localhost:3000/login-submission

import * as React from 'react'
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {build, fake} from '@jackfranklin/test-data-bot'
import Login from '../../components/login-submission'
import {setupServer} from 'msw/node'
import {handlers} from 'test/server-handlers'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())

const buildLoginForm = build({
  fields: {
    username: fake(f => f.internet.userName()),
    password: fake(f => f.internet.password()),
  },
})

test(`logging in displays the user's username`, async () => {
  render(<Login />)
  const {username, password} = buildLoginForm()

  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.type(screen.getByLabelText(/password/i), password)
  userEvent.click(screen.getByRole('button', /submit/i))

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))

  expect(screen.getByText(username)).toBeInTheDocument()
})

test('logining in without password causes alert', async () => {
  render(<Login />)
  const {username} = buildLoginForm()
  userEvent.type(screen.getByLabelText(/username/i), username)
  userEvent.click(screen.getByRole('button', /submit/i))

  await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))
  expect(screen.getByRole(/alert/i)).toBeInTheDocument()

  // allow jest to updat the text for us automatically
  expect(screen.getByRole(/alert/i).textContent).toMatchInlineSnapshot(
    `"password required"`,
  )
})
