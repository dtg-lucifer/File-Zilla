import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    // TODO: make the design more interesting and vibrant
    <main className="h-screen grid place-items-center">
      <div className="p-2">
        <UserButton showName />
      </div>
    </main>
  );
}
