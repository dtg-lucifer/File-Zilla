import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import React from "react";

const LoginPage = () => {
  return (
    <main className="grid place-items-center h-screen w-screen">
      <SignIn appearance={{baseTheme: dark}} />
    </main>
  );
};

export default LoginPage;
