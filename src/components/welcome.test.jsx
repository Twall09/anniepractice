import React from "react";
import Button from "./Button";
import { render, screen } from "@testing-library/react";

test('renders a button with the label "Click me!"', () => {
  render(<Button />);
  const buttonElement = screen.getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders an h2 heading with the text "Welcome"', () => {
  render(<Button />);
  const headingElement = screen.getByRole("heading", {
    level: 2,
    name: /Welcome/i,
  });
  expect(headingElement).toBeInTheDocument();
});

test('renders an h3 heading with the text "Thanks for visiting"', () => {
  render(<Button />);
  const headingElement = screen.getByRole("heading", {
    level: 3,
    name: /Thanks for visiting/i,
  });
  expect(headingElement).toBeInTheDocument();
});
