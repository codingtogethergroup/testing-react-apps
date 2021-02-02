// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

function renderWithProvider(ui, {theme = 'light', ...options} = {}) {
  const Wrapper = ({children}) => <ThemeProvider>{children}</ThemeProvider>
  return render(ui, {wrapper: Wrapper, ...options})
}

test('renders with the light styles for the light theme', () => {
  renderWithProvider(<EasyButton>Easy</EasyButton>, {theme: 'light'})
  const easyBtn = screen.getByRole('button', {name: /easy/i})
  expect(easyBtn).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the light theme', () => {
  renderWithProvider(<EasyButton>Easy</EasyButton>, {theme: 'dark'})
  const easyBtn = screen.getByRole('button', {name: /easy/i})
  expect(easyBtn).toHaveStyle(`
    background-color: white;
    color:black;
  `)
})
