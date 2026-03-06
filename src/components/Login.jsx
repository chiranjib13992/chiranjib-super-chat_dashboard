import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../services/globalServices";


// --- CSS Styles as JavaScript Objects ---
const styles = {
  // --- CSS VARIABLES (Design System) ---
  vars: {
    colorPrimary: '#1e3a8a',
    colorSecondary: '#4b5563',
    colorBackground: '#f8fafc',
    colorCard: '#ffffff',
    colorBorder: '#e5e7eb',
    colorGraphicBg: '#0f172a',
    spacingSm: '0.5rem',
    spacingMd: '1rem',
    spacingLg: '1.5rem',
    spacingXl: '2rem',
    radiusSm: '0.5rem',
    radiusLg: '1rem',
    fontHeading: '1.75rem',
    fontBody: '1rem',
    fontSmall: '0.875rem',
  },

  // --- MOBILE/DEFAULT STYLES (Single Column) ---
  proWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#2c75bdff', // var(--color-background)
    padding: '1rem', // var(--spacing-md)
    fontFamily: 'Inter, sans-serif, Arial, sans-serif',
  },

  proCard: {
    padding: '6rem',             // Increased padding for more space
    borderRadius: '2.5rem',      // Slightly rounder corners
    width: '100%',
    maxWidth: '500px',           // Bigger width
    boxShadow: '0 15px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -5px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e5e7eb', // Border color
  },

  proHeader: {
    marginBottom: '2rem', // var(--spacing-xl)
  },

  proHeaderH2: {
    fontSize: '1.75rem', // var(--font-heading)
    fontWeight: 700,
    color: '#1e3a8a', // var(--color-primary)
    margin: '0 0 0.5rem 0', // var(--spacing-sm)
  },

  proHeaderP: {
    fontSize: '1rem', // var(--font-body)
    color: '#4b5563', // var(--color-secondary)
    margin: 0,
  },

  proForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem', // var(--spacing-lg)
  },

  proFormGroup: {
    // Wrapper for label and input
  },

  proFormGroupLabel: {
    display: 'block',
    fontSize: '0.875rem', // var(--font-small)
    fontWeight: 600,
    color: '#4b5563', // var(--color-secondary)
    marginBottom: '0.5rem', // var(--spacing-sm)
  },

  proFormGroupInput: {
    width: '100%',
    padding: '1rem', // var(--spacing-md)
    border: '1px solid #e5e7eb', // var(--color-border)
    borderRadius: '0.5rem', // var(--radius-sm)
    fontSize: '1rem', // var(--font-body)
    color: '#4b5563', // var(--color-secondary)
    boxSizing: 'border-box',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    // Note: Focus styles handled by component logic for React's event handlers, 
    // but included here as base style for clarity.
  },

  proPasswordBox: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },

  proPasswordBoxInput: {
    paddingRight: '3rem',
  },

  proTogglePass: {
    position: 'absolute',
    right: 0,
    padding: '1rem', // var(--spacing-md)
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#4b5563', // var(--color-secondary)
    transition: 'color 0.2s',
  },

  proOptionsRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '1.5rem', // var(--spacing-lg)
  },

  proForgotLink: {
    fontSize: '0.875rem', // var(--font-small)
    color: '#4b5563', // var(--color-secondary)
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'color 0.2s',
  },

  proBottomText: {
    fontSize: '0.875rem', // var(--font-small)
    color: '#4b5563', // var(--color-secondary)
    textAlign: 'center',
    marginTop: '1.5rem', // var(--spacing-lg)
  },

  proSignupLink: {
    color: '#1e3a8a', // var(--color-primary)
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.2s',
  },

  proSubmitBtn: {
    width: '100%',
    padding: '1.5rem 0', // var(--spacing-lg) 
    backgroundColor: '#1e3a8a', // var(--color-primary)
    color: '#ffffff', // var(--color-card)
    border: 'none',
    borderRadius: '0.5rem', // var(--radius-sm)
    fontSize: '1rem', // var(--font-body)
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'background-color 0.2s, box-shadow 0.2s',
  },


  // --- DESKTOP GRID LAYOUT (Two-Column) ---
  proDesktopWrapper: {
    display: 'grid',
    gridTemplateColumns: '2fr 3fr', // 40% for graphic, 60% for login
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f8fafc',
    fontFamily: 'Inter, sans-serif, Arial, sans-serif',
  },

  proGraphicPanel: {
    backgroundColor: '#0f172a', // var(--color-graphic-bg)
    color: '#ffffff', // var(--color-card)
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '4rem',
    boxShadow: '4px 0 10px rgba(0, 0, 0, 0.1)',
  },

  proGraphicContentH1: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '1rem', // var(--spacing-md)
    lineHeight: 1.2,
  },

  proGraphicContentP: {
    fontSize: '1.5rem', // var(--spacing-lg)
    opacity: 0.8,
  },

  proGraphicIcon: {
    fontSize: '4rem',
    marginTop: '2rem', // var(--spacing-xl)
    color: '#1e3a8a', // var(--color-primary)
  },

  proLoginColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem',
  },

  // Desktop Card Adjustments (Overriding mobile padding/shadow)
  proDesktopCard: {
    boxShadow: 'none',
    border: 'none',
    maxWidth: '450px',
    padding: '0',
  },
};

// --- Placeholder for the Graphic Panel Content ---
const DesktopGraphic = () => {
  return (
    <div style={styles.proGraphicPanel}>
      <div className="pro-graphic-content">
        <h1 style={styles.proGraphicContentH1}>Welcome to the Future of Chat</h1>
        <p style={styles.proGraphicContentP}>Securely sign in to connect with friends, share your status, and explore new communities.</p>
        <i className="fas fa-comments" style={styles.proGraphicIcon}></i>
      </div>
    </div>
  );
};

// --- The Core Login Form (Original Content) ---
const LoginFormCard = ({ setShowPassword, showPassword, isDesktop }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (isLoggedIn()) {
      navigate('/dashboard')
    }
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Login submitted:", { email, password });

      // Await the API call
      const res = await apiService.Login({ email, password });

      // Check if login was successful
      if (res && res.status === 200) {
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        // Handle unsuccessful login
        alert(res?.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(err?.response?.data?.message || "Something went wrong during login.");
    }
  };


  // Combine mobile styles with desktop overrides if necessary
  const cardStyle = isDesktop ? { ...styles.proCard, ...styles.proDesktopCard } : styles.proCard;

  return (
    <div style={cardStyle}>

      <div style={styles.proHeader}>
        <h2 style={styles.proHeaderH2}>Sign in to your account</h2>
        <p style={styles.proHeaderP}>Enter your credentials to continue.</p>
      </div>

      <form style={styles.proForm} onSubmit={handleSubmit}>

        <div style={styles.proFormGroup}>
          <label style={styles.proFormGroupLabel}>Email address</label>
          <input
            type="email"
            placeholder="you@example.com"
            required
            style={styles.proFormGroupInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={styles.proFormGroup}>
          <label style={styles.proFormGroupLabel}>Password</label>
          <div style={styles.proPasswordBox}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              style={{ ...styles.proFormGroupInput, ...styles.proPasswordBoxInput }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              style={styles.proTogglePass}
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={showPassword ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}></i>
            </button>
          </div>
        </div>

        <div style={styles.proOptionsRow}>
          <a href="#" style={styles.proForgotLink}>Forgot password?</a>
        </div>

        <button type="submit" style={styles.proSubmitBtn}>Sign in</button>
      </form>

      <p style={styles.proBottomText}>
        Don’t have an account?&nbsp;
        <a href="/signup" style={styles.proSignupLink}>Create an account</a>
      </p>

    </div>
  );
};


// --- Main Login Component with Responsive Logic ---
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // Effect to check screen size (Responsive Logic)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  // Render the two-column grid for desktop, or the single wrapper for mobile
  if (isDesktop) {
    return (
      <div style={styles.proDesktopWrapper}>
        <DesktopGraphic />

        <div style={styles.proLoginColumn}>
          <LoginFormCard
            setShowPassword={setShowPassword}
            showPassword={showPassword}
            isDesktop={true}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div style={styles.proWrapper}>
        <LoginFormCard
          setShowPassword={setShowPassword}
          showPassword={showPassword}
          isDesktop={false}
        />
      </div>
    );
  }
}