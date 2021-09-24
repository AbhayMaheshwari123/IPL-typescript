import { render, screen } from '@testing-library/react'
import Navbar from '../src/Components/Navbar'
import Cards from '../src/Components/TeamCards'

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

  test('Navbar should render and check for the class', () => {
    render(<Navbar />)
    const navbarElement = screen.getByTitle('navbar')
    expect(navbarElement).toHaveClass('navbar-0-2-1')
  })

  test('Image should render by title ', () => {
    render(<Navbar />)
    const navbarElement = screen.getByTitle('img')
    expect(navbarElement).toBeInTheDocument()
  })

  test('Image should render and check for the class ', () => {
    render(<Navbar />)
    const navbarElement = screen.getByTitle('img')
    expect(navbarElement).toHaveClass('logo-0-2-2')
  })
})

describe('TeamCards', () => {
  test('Team Image should render', async () => {
    render(<Cards />)
    const imgElement = await screen.findByAltText('Team Logo')
    expect(imgElement).toBeInTheDocument()
  })
})
