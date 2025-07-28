import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

describe('ContactPage', () => {
    it('renders ContactPage component', () => {
        render(<ContactPage />);
        const comp = screen.getByTestId('contact-page');
        expect(comp).toBeInTheDocument();
        const form = screen.getByTestId('contact-form')
        expect(form).toBeInTheDocument();
        const emailInput = screen.getByTestId('email-input')
        expect(emailInput).toBeInTheDocument();
        const subjectInput = screen.getByTestId('subject-input')
        expect(subjectInput).toBeInTheDocument()
        const messageInput = screen.getByTestId('message-input')
        expect(messageInput).toBeInTheDocument()
        const submitButton = screen.getByRole('button', { name: 'Submit' })
        expect(submitButton).toBeInTheDocument()
        const title = screen.getByRole('heading', { name: 'Contact Me' })
        expect(title).toBeInTheDocument()
    });
})