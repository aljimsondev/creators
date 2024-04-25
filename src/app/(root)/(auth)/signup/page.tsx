import React from "react";
import SignupForm from "src/components/client/forms/auth/SignupForm";
import { AppNavbar } from "src/components/elements/navbar";

function SignupPage() {
  return (
    <main>
      <AppNavbar />
      <div className="flex items-center justify-center h-[calc(100dvh-var(--nav-height))] w-[100dvw]">
        <SignupForm />
      </div>
    </main>
  );
}

export default SignupPage;
