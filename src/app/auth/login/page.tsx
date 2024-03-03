import { SignIn, SignInButton } from "@clerk/nextjs";
import React from "react";

const LoginPage = () => {
  return (
    <main className="container grid place-items-center h-screen w-screen">
      <SignInButton mode="modal" />
    </main>
  );
};

export default LoginPage;
