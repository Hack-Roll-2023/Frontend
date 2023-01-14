/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                dark: {
                    800: "#232323",
                    900: "#171717",
                },
            },
            fontFamily: {
                chinese: ["Chinese"],
            },
        },
    },
    plugins: [],
};
