"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function HomePage() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Welcome, {user.name || "Guest"}!</h1>
      <p className="mt-4">
        This is a simple application demonstrating the use of Redux Toolkit with
        Next.js.
      </p>
      <p className="mt-2">
        You can navigate to the{" "}
        <a href="/deals" className="text-blue-500">
          Deals
        </a>{" "}
        page to see the available deals.
      </p>
    </main>
  );
}
