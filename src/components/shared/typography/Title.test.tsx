import { render, screen } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("입력한 텍스트가 출력된다.", () => {
    const titleText = "Hello, World!";
    render(<Title>{titleText}</Title>);
    const titleElement = screen.getByText(titleText);
    expect(titleElement).toBeInTheDocument();
  });
});
