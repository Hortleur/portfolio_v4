import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import Name from '@/app/components/Name';

describe('Name', () => {
    it('renders Name component', () => {
        render(<Name />);
        const comp = screen.getByTestId('name-comp');
        expect(comp).toBeInTheDocument();
    });
})