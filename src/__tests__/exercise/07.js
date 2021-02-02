// testing with context and a custom render method
// http://localhost:3000/easy-button

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {ThemeProvider} from '../../components/theme'
import EasyButton from '../../components/easy-button'

test('renders with the light styles for the light theme', () => {
  const Wrapper = props => <ThemeProvider {...props} />
  render(<EasyButton>Easy</EasyButton>, {wrapper: Wrapper})

  const easyBtn = screen.getByRole('button', {name: /easy/i})
  expect(easyBtn).toHaveStyle(`
    background-color: white;
    color: black;
  `)
})

test('renders with the dark styles for the light theme', () => {
  const Wrapper = props => <ThemeProvider initialTheme="dark" {...props} />
  render(<EasyButton>Easy</EasyButton>, {wrapper: Wrapper})

  const easyBtn = screen.getByRole('button', {name: /easy/i})
  expect(easyBtn).toHaveStyle(`
    background-color: black;
    color: white;
  `)
})
