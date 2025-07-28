import "@testing-library/jest-dom"
import {render, screen} from '@testing-library/react';
import ArtDecoCorner from '@/app/components/ArtDecoCorner';

describe('ArtDecoCorner', () => {
    it('renders ArtDecoCorner component', () => {
        render(<ArtDecoCorner />);
        const deco = screen.getByTestId("art-deco-corner");
        expect(deco).toBeInTheDocument();
    });
})