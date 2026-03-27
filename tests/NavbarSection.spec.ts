import { fireEvent, render, screen } from '@testing-library/vue'
import NavbarSection from '../src/components/sections/NavbarSection.vue'

describe('NavbarSection', () => {
  it('toggles mobile menu via button', async () => {
    render(NavbarSection)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()

    await fireEvent.click(toggle)
    expect(screen.getByRole('navigation', { name: /mobile/i })).toBeInTheDocument()

    await fireEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })
})
