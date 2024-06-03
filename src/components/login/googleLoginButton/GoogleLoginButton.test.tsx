import { render, screen } from "@testing-library/react";
import GoogleLoginButton from "./GoogleLoginButton";

describe("GoogleLoginButton", () => {
  it("renders the Google login button with the correct text", () => {
    render(<GoogleLoginButton />);

    expect(screen.getByText("구글로 로그인")).toBeInTheDocument();
  });
});
