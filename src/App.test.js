import React from 'react'
import { render, screen } from '@testing-library/react'
import Hero from './components/Hero'

describe('Hero', () => {
  test('render hero component', () => {
    render(<Hero />)
  })
})

describe('Hero', () => {
  test('render hero component and screen for text', () => {
    render(<Hero />)
    expect(screen.getByText('Because we know we have to Watch them all!')).toBeInTheDocument()
  })
})

describe('Hero', () => {
  test('check text color is theme text color', () => {
    render(<Hero />)
    expect(screen.getByText('Because we know we have to Watch them all!')).toHaveStyle(`color: ${(props) => props.theme.color}`)
  })
})

