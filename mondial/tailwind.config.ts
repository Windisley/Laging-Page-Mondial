import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#003672",
        black: "#001123",
        white: "#E7F2FF"
      },
      fontFamily:{
        "roboto-regular": ["Roboto-Regular", "Sans-Serif"],
        "roboto-bold": ["Roboto-Bold", "Sans-Serif"],
        "roboto-medium": ["Roboto-Medium", "Sans-Serif"],
        "roboto-italic": ["Roboto-Italic", "Sans-Serif"]
      },
      maxWidth:{
        container: "1500px",
        towcont:    "750px",
      },
      margin:{
        mcentralize: "0 auto"
      },
      screens:{
        mobasmall: "300px",
        mobamedium: "500px",
        tablet:     "700px",
        desktop:    "1200px"
      }
    },
  },
  plugins: [],
} satisfies Config;
