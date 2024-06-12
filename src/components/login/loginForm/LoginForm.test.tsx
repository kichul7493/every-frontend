import { render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import { userEvent } from "@testing-library/user-event";

jest.mock("@/actions/users/signIn", () => () => jest.fn());

const loginActionMock = jest.fn();

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormStatus: jest.fn(() => ({ pending: false })),
  useFormState: jest.fn(() => [
    {
      fieldErrors: {
        email: "",
        password: "",
      },
    },
    loginActionMock,
  ]),
}));

describe("LoginForm", () => {
  it("renders the login form correctly", () => {
    render(<LoginForm />);

    expect(screen.getByLabelText("이메일")).toBeInTheDocument();
    expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
    expect(screen.getByText("이메일 기억하기")).toBeInTheDocument();
    expect(screen.getByText("비밀번호 찾기")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "이메일로 로그인" })
    ).toBeInTheDocument();
  });

  it("updates email value and password value correctly", async () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("이메일");
    await userEvent.type(emailInput, "test@test.com");

    const passwordInput = screen.getByLabelText("비밀번호");
    await userEvent.type(passwordInput, "password");

    expect(emailInput).toHaveValue("test@test.com");
    expect(passwordInput).toHaveValue("password");
  });

  it("updates remember value correctly", async () => {
    render(<LoginForm />);

    const rememberCheckbox = screen.getByRole("checkbox");
    await userEvent.click(rememberCheckbox);

    expect(rememberCheckbox).toBeChecked();
  });
});
