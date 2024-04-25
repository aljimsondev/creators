import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  //todo do the auth checking here or you can simply configure in middleware.ts
  //todo e.g. redirection to home page when already logged in, etc.

  return children;
}

export default AuthLayout;
