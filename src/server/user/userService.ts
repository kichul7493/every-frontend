import { compare, hash } from "@/utils/passwordEncoder";
import { sendCode, sendSignupEmail } from "../mail/mailService";
import { createUser, findByEmail, update } from "./userRepository";
import generateRandomCode from "@/utils/generateCode";

export async function createNewUser({
  email,
  name,
  password,
  salt,
  code,
}: CreateUserProps) {
  const newUser = await createUser({
    email,
    name,
    password,
    salt,
    code,
  });

  await sendSignupEmail(newUser.email, newUser.name, newUser.code);
}

export async function signin(email: string, password: string) {
  const user = await findByEmail(email);

  if (!user || user.status !== "VERIFIED") {
    throw new Error("이메일 혹은 비밀번호가 올바르지 않습니다.");
  }

  const isValid = compare(password as string, user.password, user.salt);

  if (!isValid) {
    throw new Error("이메일 혹은 비밀번호가 올바르지 않습니다.");
  }

  return {
    id: user.id.toString(),
    name: user.name,
    email: user.email,
    image: "",
  };
}

export async function verifyUser(email: string, code: string) {
  const user = await findByEmail(email);

  if (!user || user.code !== code) {
    throw new Error("인증 코드가 일치하지 않습니다.");
  }

  const updatedUser = {
    ...user,
    status: "VERIFIED",
  };

  await update(updatedUser);
}

export async function sendVerifyCode(email: string) {
  const user = await findByEmail(email);

  if (!user) {
    throw new Error("존재하지 않는 이메일입니다.");
  }

  const code = generateRandomCode(6);

  const updatedUser = {
    ...user,
    code,
  };

  await update(updatedUser);

  await sendCode(email, code);
}

export async function changePassword({
  email,
  code,
  password,
}: ChangePasswordProps) {
  const user = await findByEmail(email);

  if (!user || user.code !== code) {
    throw new Error("인증 코드가 일치하지 않습니다.");
  }

  const { password: hashedPassowrd, salt } = hash(password);

  const updatedUser = {
    ...user,
    password: hashedPassowrd,
    salt,
  };

  await update(updatedUser);
}
