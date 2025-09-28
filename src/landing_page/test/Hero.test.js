import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // <-- updated import
import Hero from '../home/Hero';


// test suite
describe('Hero Component', () => {
    test("render hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute(
            "src",
            "media/images/homeHero.png"
        );
    });
});
