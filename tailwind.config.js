/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins-Regular", "sans-serif"],
      },
      colors: {
        primary: "#003399", // Warna biru BRI
        secondary: "#F7931E", // Warna oranye
        cardBackground: "#F5F5F5", // Warna latar belakang
        textPrimary: "#000000", // Hitam untuk teks utama
        textSecondary: "#666666", // Abu-abu untuk teks sekunder
        pageBackground: "#4C4B59",
      }
    },
  },
  plugins: [],
}