import { fireEvent, render, screen } from '@testing-library/vue'
import ContactSection from '../src/components/sections/ContactSection.vue'

describe('ContactSection', () => {
  it('submits frontend-only form and shows status message', async () => {
    render(ContactSection)

    await fireEvent.update(screen.getByLabelText(/name/i), 'Avery')
    await fireEvent.update(screen.getByLabelText(/email/i), 'avery@example.com')
    await fireEvent.update(screen.getByLabelText(/message/i), 'Would love your Patagonia route tips.')

    await fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/frontend demo/i)
  })
})
