import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const headerStyles = {
  // --- CSS VARIABLES (Design System) ---
  vars: {
    colorPrimary: '#1e3a8a',
    colorSecondary: '#4b5563',
    colorBackground: '#f8fafc',
    colorHeaderBg: '#1e3a8a', // Header background
    colorHeaderText: '#ffffff', // Header text color
    colorNavHover: '#3b82f6', // Nav hover color
    spacingSm: '0.5rem',
    spacingMd: '1rem',
    spacingLg: '1.5rem',
    spacingXl: '2rem',
    radiusSm: '0.5rem',
    fontHeading: '1.25rem',
    fontBody: '1rem',
  },

  // --- HEADER WRAPPER (Fixed at top) ---
  headerWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '4rem', // 64px
    backgroundColor: '#1e3a8a', // var(--colorHeaderBg)
    color: '#ffffff', // var(--colorHeaderText)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem', // horizontal padding
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
  },

  // --- LOGO SECTION ---
  headerLogo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    textDecoration: 'none',
  },

  // --- NAVIGATION ---
  headerNav: {
    display: 'flex',
    gap: '1.5rem', // space between nav items
  },

  headerNavLink: {
    fontSize: '1rem', // var(--fontBody)
    color: '#ffffff', // default color
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s',
  },

  headerNavLinkHover: {
    color: '#3b82f6', // var(--colorNavHover)
  },

  // --- RESPONSIVE (Mobile) NAV TOGGLE BUTTON ---
  headerMobileToggle: {
    display: 'none', // show only on mobile with media query
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    color: '#ffffff',
    cursor: 'pointer',
  },
};

// src/styles/footerStyles.js
export const footerStyles = {
  vars: {
    colorFooterBg: '#1e3a8a',       // Background color
    colorFooterText: '#ffffff',     // Text color
    spacingMd: '1rem',
    fontSmall: '0.875rem',          // 14px
  },

  footerWrapper: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '3.5rem', // 56px
    backgroundColor: '#1e3a8a', // var(--colorFooterBg)
    color: '#ffffff',           // var(--colorFooterText)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.1)',
    zIndex: 1000,
  },

  footerText: {
    fontSize: '0.875rem',       // var(--fontSmall)
    color: '#ffffff',            // var(--colorFooterText)
    margin: 0,
  },
};

export default function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header styles={headerStyles} />

      {/* Dynamic Content */}
      <main style={{ paddingTop: headerStyles.headerWrapper.height }}>
        <Outlet />
      </main>

      <Footer styles={footerStyles}/>

    </div>
  );
}