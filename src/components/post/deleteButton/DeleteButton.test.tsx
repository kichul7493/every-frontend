import React from "react";
import { render, screen } from "@testing-library/react";
import DeleteButton from "./DeleteButton";

describe("DeleteButton", () => {
  it("should render the button", () => {
    render(<DeleteButton formAction={() => {}} slug="" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
