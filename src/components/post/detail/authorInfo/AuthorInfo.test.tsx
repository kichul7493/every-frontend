import { render, screen } from "@testing-library/react";
import AuthorInfo from "./AuthorInfo";

const mockProps = {
  thumbnail: "/images/avatar.jpg",
  authorName: "John Doe",
  createdAt: "2022-01-01",
};

describe("AuthorInfo", () => {
  it("renders the author information correctly", () => {
    render(<AuthorInfo {...mockProps} />);

    expect(screen.getByAltText("thumbnail")).toBeInTheDocument();
    expect(screen.getByText(mockProps.authorName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.createdAt)).toBeInTheDocument();
  });
});
