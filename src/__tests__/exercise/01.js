// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

  beforeEach(() => {
    document.body.innerHTML = ''
  })
test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<Counter />, div) // 🐨 create a div to render your component to (💰 document.createElement)

  const countValueDiv = div.firstElementChild.querySelector('div')

  // Intial value
  expect(countValueDiv.textContent).toBe('Current count: 0')

  const [decrement, increment] = div.querySelectorAll('button')

  // click increment button
  increment.click()
  expect(countValueDiv.textContent).toBe('Current count: 1')

  // click decrement button
  decrement.click()
  expect(countValueDiv.textContent).toBe('Current count: 0')

  // 🐨 cleanup by removing the div from the page (💰 div.remove())
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
  div.remove()
})

/* eslint no-unused-vars:0 */
