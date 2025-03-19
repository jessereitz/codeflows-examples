import { AuthContext } from "@/auth/AuthContext";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

export default function Home() {
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      authContext.setUsername(username)
      authContext.setToken(data.token)
      // redirect to authenticated page
      router.push('/authenticated');
    
    } else {
      setFormError(data.detail ?? 'An unexpected error occurred')      
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="font-bold text-2xl">Login</h1>
        {(authContext.username && authContext.token) ? <p>You're already logged in as "{authContext.username}". Click "Logout" to try again.</p> : <>
        <p>Log in below to be redirected</p>
        <form className="flex flex-col gap-4 w-[45em] max-w-sm" onSubmit={handleSubmit}>
          {formError && <p className="text-red-500">{formError}</p>}
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-2 font-medium">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        </>}
      </main>
    </div>
  );
}
