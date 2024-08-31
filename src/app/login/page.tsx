import React from "react";
import Link from "next/link";

type Props = {};

export default function LoginPage(props: Props) {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
      <div className="sm:shadowo-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
        <h1 className="font-semibold text-2xl">Login</h1>
        <p className="text-center">
          Need to create an account?{""}
          <Link className="text-indigo-500 hover:underline" href="/register">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
