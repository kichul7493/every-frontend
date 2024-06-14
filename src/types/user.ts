type CreateUserProps = {
  email: string;
  name: string;
  password: string;
  salt: string;
  code: string;
};

type ChangePasswordProps = {
  email: string;
  password: string;
  code: string;
};

type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  salt: string;
  code: string;
  status: string;
};
