import React from "react";
import Link from "next/link";

export default function menus() {
  return (
    <nav className="bg-slate-600  flex justify-end flex-col md:flex-row sticky top-0 drop-shadow-xl">    
      <h2 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0 p-4">
        <Link href="/">Home</Link>
      </h2>
      <h2 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0 p-4">
        <Link href="/">News</Link>
      </h2>
      <h2 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0 p-4">
        <Link href="/">Contact</Link>
      </h2>
      <h2 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0 p-4">
        <Link href="/">About</Link>
      </h2>
      <h2 className="text-1xl font-bold text-white grid place-content-center mb-2 md:mb-0 p-4">
        <Link href="/">Sign-Out</Link>
      </h2>
    </nav>
  );
}
