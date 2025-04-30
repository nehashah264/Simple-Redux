"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Header() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="w-full p-4 bg-blue-600 text-white flex justify-between items-center">
      <h1 className="font-bold text-lg">My App</h1>
      <div>{user.name ? `Hello, ${user.name}` : "Not logged in"}</div>
    </header>
  );
}
