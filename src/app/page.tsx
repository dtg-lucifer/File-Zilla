import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container h-screen grid place-items-center">
        <UserButton  />
      </div>
    </main>
  );
}
