import { AuthContext } from "@/auth/AuthContext";
import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [username, setUsername] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  return (
    <>
      <AuthContext value={{ username, token, setUsername, setToken }}>
        <Header />
        <Component {...pageProps} />
      </AuthContext>
    </>
  );
}
