import { AuthContext } from '@/auth/AuthContext';
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'

const Header = () => {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    authContext.setToken(null);
    authContext.setUsername(null);
  }

  return (
    <header className="w-full h-[50px] fixed flex justify-between items-center px-4 bg-gray-800 text-white">
      <h1>FrontEnd</h1>
      <nav>
        <Link href="/" className="mx-2">Login</Link>
        <Link href="/authenticated" className="mx-2">Authenticated</Link>

        <button onClick={handleLogout} className="mx-2">Logout</button>
      </nav>
    </header>
  )
}

export default Header
