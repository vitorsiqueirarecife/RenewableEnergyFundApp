export type Auth = {
  Users?: User[];
  Session?: User;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeTerms: boolean;
};

export type LoginForm = {
  email: string;
  password: string;
};
