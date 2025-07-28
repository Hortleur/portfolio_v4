import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import HomeLink from '@/app/components/HomeLink';

describe('HomeLink', () => {
    it('renders HomeLink component', () => {
        render(<HomeLink classes="text-6xl" name="test" target="/about" />);
        const comp = screen.getByTestId('home-link');
        expect(comp).toBeInTheDocument();
    });
})