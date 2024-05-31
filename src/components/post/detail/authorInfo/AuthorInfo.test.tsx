import { render, screen } from "@testing-library/react";
import AuthorInfo from "./AuthorInfo";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormState: jest.fn(() => [{}, jest.fn()]),
}));

jest.mock("@/actions/posts/deletePost", () => jest.fn());

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe("AuthorInfo", () => {
  const mockProps = {
    thumbnail: "/images/avatar.jpg",
    authorName: "John Doe",
    createdAt: "2022-01-01",
    isAuthor: true,
    slug: "sample-post",
  };

  it("renders the author information correctly", () => {
    render(<AuthorInfo {...mockProps} />);

    expect(screen.getByAltText("thumbnail")).toBeInTheDocument();
    expect(screen.getByText(mockProps.authorName)).toBeInTheDocument();
    expect(screen.getByText(mockProps.createdAt)).toBeInTheDocument();
  });

  it("renders the edit and delete buttons when the user is the author", () => {
    render(<AuthorInfo {...mockProps} />);

    expect(screen.getAllByRole("button")).toHaveLength(2);
  });

  it("does not render the edit and delete buttons when the user is not the author", () => {
    render(<AuthorInfo {...mockProps} isAuthor={false} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
