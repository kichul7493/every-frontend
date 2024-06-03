import { render, screen } from "@testing-library/react";
import SignupLink from "./SignupLink";

describe("SignupLink", () => {
  it("renders the signup link with the correct text", () => {
    render(<SignupLink />);

    const linkElement = screen.getByText("아직 회원이 아니신가요?");
    const signupElement = screen.getByText("회원가입");

    expect(linkElement).toBeInTheDocument();
    expect(signupElement).toBeInTheDocument();
  });

  it("has the correct href attribute", () => {
    render(<SignupLink />);

    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveAttribute("href", "signup");
  });
});
