/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 16 column grid
                16: 'repeat(auto-fit, minmax(270px, 1fr))',

                // Complex site-specific column configuration
                // footer: '200px minmax(900px, 1fr) 100px',
            },
        },
    },
    plugins: [],
};
