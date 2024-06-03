import { render, screen } from "@testing-library/react";
import KaKaoLoginButton from "./KaKaoLoginButton";

describe("KaKaoLoginButton", () => {
  it("renders the KaKao login button with the correct text", () => {
    render(<KaKaoLoginButton />);

    expect(screen.getByText("카카오로 로그인")).toBeInTheDocument();
  });
});
