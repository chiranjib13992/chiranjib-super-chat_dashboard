// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900 text-white h-16 flex items-center justify-between px-6 shadow-md z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/dashboard">Super Chat</Link>
      </div>

      {/* Navigation */}
      <nav className="space-x-6">
        <Link
          to="/dashboard"
          className="hover:text-slate-300 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/messages"
          className="hover:text-slate-300 transition-colors"
        >
          Messages
        </Link>
        <Link
          to="/"
          className="hover:text-slate-300 transition-colors"
        >
          Logout
        </Link>
      </nav>
    </header>
  );
}