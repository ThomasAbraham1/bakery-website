/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                oxblood: '#730d0d', // adjusted slightly to match the deep red from the reference
                cream: '#fdf5e6', // a warm cream color matching the massive text
            },
            fontFamily: {
                impact: ['Impact', 'Arial Black', 'sans-serif'], // for the massive typography
                sans: ['Inter', 'system-ui', 'sans-serif'], // standard font for descriptions
            },
        },
    },
    plugins: [],
}
