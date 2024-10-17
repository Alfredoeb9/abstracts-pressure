/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        gunMetal: "#353E43",
        pastelRed: "#FF746C",
      },
      textColor: {
        gunMetal: "#353E43",
        pastelRed: "#FF746C",
      },
      backgroundImage: {
        "concrete-hero": "url('/src/assets/img/concrete-wash-2.jpg')",
        "gutter-hero": "url('/src/assets/img/gutter-cleaning-2.jpg')",
        "home-hero": "url('/src/assets/img/house-wash-1.jpg')",
        "roof-hero": "url('/src/assets/img/roof-power-wash-1.jpg')",
        "window-hero": "url('/src/assets/img/window-power-wash-1.jpg')",
      },
    },
  },
  plugins: [],
};
