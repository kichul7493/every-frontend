import { render, screen } from "@testing-library/react";
import PostTitle from "./PostTitle";

describe("PostTitle", () => {
  it("renders the title correctly", () => {
    const title = "Sample Title";
    render(<PostTitle title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});
