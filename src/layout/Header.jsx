// src/components/Header.jsx
import { Link } from "react-router-dom";
import { logout } from "../services/globalServices";

export default function Header({ styles }) {
  return (
    <header style={styles.headerWrapper}>
      <Link to="/dashboard" style={styles.headerLogo}>
        Super Chat
      </Link>

      <nav style={styles.headerNav}>
        <Link to="/dashboard" style={styles.headerNavLink}>
          Dashboard
        </Link>
        <Link to="/messages" style={styles.headerNavLink}>
          Messages
        </Link>
        <Link onClick={logout} style={styles.headerNavLink}>
          Logout
        </Link>
      </nav>
    </header>
  );
}