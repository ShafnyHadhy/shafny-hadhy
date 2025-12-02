/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#0D1117",
                secondary: "#161b22",
                tertiary: "#1F2937",
                neonBlue: "#2f81f7", // GitHub blue-ish neon
                neonGreen: "#2ea043", // GitHub green-ish neon
                // Let's use the user's requested colors more closely
                // "Neon blue & emerald green accents"
                // "Colors like #0D1117, #111827, #1F2937"
                primary: "#0D1117", // Main background
                surface: "#111827", // Secondary background
                accent: "#00f2ff", // Neon Blue
                accentGreen: "#00ff88", // Neon Green
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
}
