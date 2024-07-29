import React from "react";
import { render, screen } from "@testing-library/react";
import Users from "./Users";

test('renders a heading with the text "Users starting with letter B"', () => {
  render(<Users users={[]} />);
  const headingElement = screen.getByRole("heading", {
    level: 1,
    name: /Users starting with letter B/i,
  });
  expect(headingElement).toBeInTheDocument();
});

test("renders a list element", () => {
  render(<Users users={[]} />);
  const listElement = screen.getByRole("list");
  expect(listElement).toBeInTheDocument();
});

test("renders 3 users when the users array is passed as props", () => {
  const users = [
    { id: 1, firstName: "Simon", lastName: "" },
    { id: 2, firstName: "Barbera", lastName: "" },
    { id: 3, firstName: "Bob", lastName: "" },
    { id: 4, firstName: "Elf", lastName: "" },
    { id: 5, firstName: "Alexandar", lastName: "" },
    { id: 6, firstName: "Brad", lastName: "" },
  ];

  render(<Users users={users} />);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems).toHaveLength(3);
});
