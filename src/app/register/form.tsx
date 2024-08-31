import React from "react";

export const RegisterForm = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("test");
  };
  return (
    <form>
      <input />
      <input />
      <button>Register</button>
    </form>
  );
};
