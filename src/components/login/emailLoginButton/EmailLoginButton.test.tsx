import { render, screen } from "@testing-library/react";
import EmailLoginButton from "./EmailLoginButton";

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(() => ({ pending: false })),
}));

describe("EmailLoginButton", () => {
  it("renders the email login button with the correct text", () => {
    render(<EmailLoginButton />);

    expect(screen.getByText("이메일로 로그인")).toBeInTheDocument();
  });
});
