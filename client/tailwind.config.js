// client/tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3BC8E1",     // primary
          secondary: "#070FA3",   // secondary
          text: "#332B2C",        // testo principale
          muted: "#818181",       // testo secondario
          background: "#ffffff",  // sfondo
        },
        fontFamily: {
          sans: ["'Inter'", "sans-serif"],
        },
        fontSize: {
            xs: "0.75rem",      // 12px
            sm: "0.875rem",     // 14px
            base: "1rem",       // 16px
            md: "1.125rem",     // 18px
            lg: "1.25rem",      // 20px
            xl: "1.5rem",       // 24px
            "2xl": "1.875rem",    // 30px
            "3xl": "2.25rem",    // 36px
            "4xl": "3rem",      // 48px
          },
        borderRadius: {
          lg: "1.25rem",      // 20px
        },
        boxShadow: {
            "elevation-1": "0px 1px 3px rgba(0, 0, 0, 0.12)", // M3 light shadow
        },
      },
    },
    plugins: [],
  };  