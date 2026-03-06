import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";

// --- CSS Styles as JavaScript Objects (Copied from Login) ---
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
        backgroundColor: '#f8fafc', // var(--color-background)
        padding: '1rem', // var(--spacing-md)
        fontFamily: 'Inter, sans-serif, Arial, sans-serif',
    },

    proCard: {
        padding: '2rem', // var(--spacing-xl)
        borderRadius: '1rem', // var(--radius-lg)
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e5e7eb', // var(--color-border)
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
                <h1 style={styles.proGraphicContentH1}>Join the Future of Chat</h1>
                <p style={styles.proGraphicContentP}>Create your account today and start connecting with friends instantly.</p>
                <i className="fas fa-user-plus" style={{ ...styles.proGraphicIcon, color: '#10b981' }}></i> {/* Different icon/color for sign up */}
            </div>
        </div>
    );
};

// --- The Core Sign Up Form ---
const SignUpFormCard = ({ setShowPassword, showPassword, isDesktop }) => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sign Up submitted:", { phone, email, password });
        const res = await apiService.signUp({ name, phone, email, password })
        if (res) {
            alert('Ok done')
        }
        // Add your user creation logic here
    };

    const cardStyle = isDesktop ? { ...styles.proCard, ...styles.proDesktopCard } : styles.proCard;

    return (
        <div style={cardStyle}>

            <div style={styles.proHeader}>
                <h2 style={styles.proHeaderH2}>Create your account</h2>
                <p style={styles.proHeaderP}>Get started by filling out the details below.</p>
            </div>

            <form style={styles.proForm} onSubmit={handleSubmit}>
                {/* Username Field */}
                <div style={styles.proFormGroup}>
                    <label style={styles.proFormGroupLabel}>Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        required
                        style={styles.proFormGroupInput}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div style={styles.proFormGroup}>
                    <label style={styles.proFormGroupLabel}>Phone</label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        required
                        style={styles.proFormGroupInput}
                        value={phone}
                        maxLength={10} // HTML restriction
                        onChange={(e) => {
                            const value = e.target.value;
                            // Allow only digits and max 10 characters
                            if (/^\d{0,10}$/.test(value)) {
                                setPhone(value);
                            }
                        }}
                    />
                    {phone.length > 0 && phone.length < 10 && (
                        <span style={{ color: 'red', fontSize: '12px' }}>Phone number must be 10 digits</span>
                    )}
                </div>

                {/* Email Field */}
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

                {/* Password Field */}
                <div style={styles.proFormGroup}>
                    <label style={styles.proFormGroupLabel}>Password</label>
                    <div style={styles.proPasswordBox}>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
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

                {/* Submit Button (Changed to "Create Account") */}
                <button type="submit" style={styles.proSubmitBtn}>Create Account</button>
            </form>

            <p style={styles.proBottomText}>
                Already have an account?&nbsp;
                <a href="/login" style={styles.proSignupLink}>Sign in</a>
            </p>

        </div>
    );
};


// --- Main Sign Up Component with Responsive Logic ---
export default function Signup() {
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
                    <SignUpFormCard
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
                <SignUpFormCard
                    setShowPassword={setShowPassword}
                    showPassword={showPassword}
                    isDesktop={false}
                />
            </div>
        );
    }
}