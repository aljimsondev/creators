import React from "react";
import LoginForm from "src/components/client/forms/auth/LoginForm";

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-var(--nav-height))] w-[100dvw]">
      <LoginForm />
    </div>
  );
}

export default LoginPage;
