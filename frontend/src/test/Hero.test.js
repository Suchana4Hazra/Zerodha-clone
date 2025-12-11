import React from "react";
import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom' //delay few seconds for checking
import Hero from "../landing_page/home/Hero"

//Test Suite(Multiple test cases we can run simultaneously)
describe('Hero Component', () => {

    //test: 1
    test('rendes hero image', () => {
        //render the component first
        render(<Hero />);
        //search for one element
        const heroImage = screen.getByAltText("Hero Image"); //try to check the image whose alt text is "Hero Image"
        //expect that element should be present in the page
        expect(heroImage).toBeInTheDocument();
        //Element should have the particular attribute
        expect(heroImage).toHaveAttribute("src", "/media/images/homeHero.png")
    });

    //test: 2
    test('renders signup page', () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", {name: "Sign up for free"})
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    })
})