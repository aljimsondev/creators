import React from "react";
import LoginForm from "src/components/client/forms/auth/LoginForm";
import { AppNavbar } from "src/components/elements/navbar";

function LoginPage() {
  return (
    <main>
      <AppNavbar />
      <div className="flex items-center justify-center h-[calc(100dvh-var(--nav-height))] w-[100dvw]">
        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
