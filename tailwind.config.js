/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "acento-principal": "#24b770",
        "acento-principal-hover": "#63e3b0",
        "acento-principal-pressed": "#0e8153",
        "acento-secundario": "#087f8c",
        "acento-secundario-hover": "#64cdd9",
        "acento-secundario-pressed": "#1c636a",
        secundario: "#3a5a75",
        "neutro-1": "#ffffff",
        "neutro-2": "#e1e4ef",
        "neutro-3": "#c4d3e5",
        "neutro-4": "#97a8c2",
        background: "#f0f3f8",
        "complementario-1": "#e4bf31",
        "complementario-2": "#6e6bd1",
        "complementario-3": "#7dd181",
        error: "#eb5160",
        "error-hover": "#fa939d",
        "error-pressed": "#ba2f3d",
      },
      fontFamily: {
        sans: ["metropolis"],
      },
    },
  },
  plugins: [],
};
