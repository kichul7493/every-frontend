import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the title", () => {
    render(<Header isLogin />);

    expect(screen.getByText("Every")).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<Header isLogin={false} />);

    expect(screen.getByText("로그인")).toBeInTheDocument();
    expect(screen.getByText("로그인")).toHaveAttribute("href", "/login");
  });

  it("renders the write button", () => {
    render(<Header isLogin />);

    expect(screen.getByText("글쓰기")).toBeInTheDocument();
    expect(screen.getByText("글쓰기")).toHaveAttribute("href", "/post/create");
  });
});
