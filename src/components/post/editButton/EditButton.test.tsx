import { render, screen, fireEvent } from "@testing-library/react";
import EditButton from "./EditButton";

describe("EditButton", () => {
  it("renders the button correctly", () => {
    render(<EditButton onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<EditButton onClick={onClickMock} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
