import { render, screen } from '@testing-library/vue'
import App from '../src/App.vue'

describe('App shell', () => {
  it('renders core travel sections', () => {
    render(App)

    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /traveller & explorer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /a minimal travel portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /places i visited/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /travel photos/i })).toBeInTheDocument()
  })
})
