/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#09090b",
                secondary: "#18181b",
                accent: "#06b6d4",
                txt: "#e4e4e7",
            },
            boxShadow: {
                'neon': '0 0 20px -5px rgba(6, 182, 212, 0.5)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}