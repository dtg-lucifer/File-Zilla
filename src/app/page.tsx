"use client";

import { SignIn, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="grid h-screen w-screen place-items-center bg-slate-200">
      <SignedOut>
        <div className="flex w-[60%] content-between items-center gap-2 overflow-hidden rounded-xl bg-white shadow-2xl">
          <div className="__left flex-grow pl-6">
            <p className="my-4 text-5xl font-bold">
              <span className="text-[#103fef]">Hello,</span>
              <br />
              Welcome to FileZilla
            </p>
            <span className="text-slate-400">
              Where the file storage is met to people withing the clouds of
              technology
            </span>
          </div>
          <div className="__right">
            <SignIn />
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <h2>Welcome back, you are signed in !!</h2>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
    </main>
  );
}
