export type Auth = {
  Users?: User[];
  Session?: User;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginForm = {
  email: string;
  password: string;
};
