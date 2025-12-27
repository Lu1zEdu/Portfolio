/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#09090b",   // Preto quase absoluto (Zinco)
                secondary: "#18181b", // Cinza muito escuro para cards
                accent: "#06b6d4",    // Ciano Neon (Cyan-500)
                txt: "#e4e4e7",       // Branco gelo
            }
        },
    },
    plugins: [],
}