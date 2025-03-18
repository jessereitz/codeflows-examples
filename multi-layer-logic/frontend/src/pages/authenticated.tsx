import { AuthContext } from "@/auth/AuthContext";
import { useContext, useEffect, useState } from "react";

const Authenticated = () => {
  const {username, token} = useContext(AuthContext);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-2xl">Authenticated Page</h1>
        <p>
          This is an "Authenticated Page." You will only see details below if
          you have logged in.
        </p>
        <ul>
          <li>Username: <strong>{username}</strong></li>
          <li>Token: <strong>{token}</strong></li>
        </ul>
      </main>
    </div>
  );
};

export default Authenticated;
