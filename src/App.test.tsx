import { render, screen } from '@testing-library/react'
import Navbar from '../src/Components/Navbar'

describe('Navbar', () => {
  test('Image should render', () => {
    render(<Navbar />)
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
  })

  test('Navbar should render', () => {
    render(<Navbar />)
    const navbarElement = screen.getByTitle('navbar')
    expect(navbarElement).toBeInTheDocument()
  })

  test('Image should render by title ', () => {
    render(<Navbar />)
    const navbarElement = screen.getByTitle('img')
    expect(navbarElement).toBeInTheDocument()
  })
})