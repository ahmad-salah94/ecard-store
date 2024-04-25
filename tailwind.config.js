export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5C1CCB',   // Example primary color (purple)
        'secondary': '#FCFCFC',  // Example secondary color (amber)
        'general': '#FDF6FE' , // Example secondary color (amber)
        'background': '##DFDAF3'  // Example secondary color (amber)
      },
      backgroundImage: {
        'ingredient-gradient': 'linear-gradient(to right, #071C1F, #1C1678, #00224D)',
        'gradient-to-r': 'linear-gradient(to right, #9025FB, #0B6EE2)',
      },
      textDirection: {
        'direction': 'right',
      },
    },
  },
  plugins: [],
}