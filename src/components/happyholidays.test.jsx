import React from "react";
import HappyHolidays from "./HappyHolidays";
import { render, screen, waitFor } from "@testing-library/react";

test("renders the initial message correctly", () => {
  render(<HappyHolidays />);
  const initialMessage = screen.getByText(/It's December!!!/i);
  expect(initialMessage).toBeInTheDocument();
});

test('ensures "Happy Holidays Hurrah!" is NOT present', () => {
  render(<HappyHolidays />);
  const holidayMessage = screen.queryByText(/Happy Holidays Hurrah!/i);
  expect(holidayMessage).not.toBeInTheDocument();
});

test('ensures "Happy Holidays Hurrah!" appears after 3 seconds', async () => {
  render(<HappyHolidays />);
  await waitFor(
    () => {
      const holidayMessage = screen.getByText(/Happy Holidays Hurrah!/i);
      expect(holidayMessage).toBeInTheDocument();
    },
    { timeout: 4000 }
  ); // appears after some time as requested
});
