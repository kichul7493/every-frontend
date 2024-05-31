import { render, screen } from "@testing-library/react";
import PostContent from "./PostContent";

describe("PostContent", () => {
  it("renders the content correctly", () => {
    const content = "<p>This is a sample post content.</p>";
    render(<PostContent content={content} />);

    const renderedContent = screen.getByText("This is a sample post content.");
    expect(renderedContent).toBeInTheDocument();
  });
});
