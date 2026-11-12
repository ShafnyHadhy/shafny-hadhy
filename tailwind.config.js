/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: "#0A0A0B",
                surface: "#121214",
                hover: "#161618",
                dot: "#2A2A2E",
                grey: "#8A8A93",
                line: "#1E1E20",
                ink: "#F2F2F2",
                body: "#A1A1AA",
                faint: "#71717A",
                lime: "#D9F24F",
            },
            fontFamily: {
                sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                heading: ['"Inter Tight Variable"', '"Inter Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            letterSpacing: {
                head: '-0.03em',
                label: '0.22em',
            },
            maxWidth: {
                page: '1200px',
            },
        },
    },
    plugins: [],
}
