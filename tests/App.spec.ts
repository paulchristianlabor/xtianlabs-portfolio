import { render, screen } from '@testing-library/vue'
import App from '../src/App.vue'

describe('App shell', () => {
  it('renders core travel sections', () => {
    render(App)

    expect(screen.getByRole('navigation', { name: /primary/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /collecting calm roads, wild skies, and tiny stories in between/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /places worth returning to/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /short notes from the road/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /plan a future route together/i })).toBeInTheDocument()
  })
})
