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
        w500:       "500px"
      },
      minHeight:{
        h350:  "350px"
      },
      maxHeight:{
        mh350:  "350px"
      },
      margin:{
        mcentralize: "0 auto"
      },
      screens:{
        mobasmall: "300px",
        mobamedium: "500px",
        tablet:     "750px",
        desktop:    "1200px"
      },
      backgroundImage:{
        "aparador-mondial": "linear-gradient(rgba(231, 242, 255), rgba(231, 242, 255, .39)), url('/imgs/mondialproduct.jpg')",
      },
      backgroundPosition:{
        "center-center": "center center"
      },
      fontSize:{
        supertitle: "2.2rem",
        title:       "1.2rem",
        paragraph:   "1rem"
      }
    },
  },
  plugins: [],
} satisfies Config;
