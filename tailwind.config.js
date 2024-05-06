export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        Tablet: "800px",
        Desktop: "1440px",
      },
      
      colors: {
        "Gradient-1": "hsl(236, 72%, 79%)",
        "Gradient-2": "hsl(237, 63%, 64%)",
        "Very-light-grayish-blue": "hsl(240, 78%, 98%)",
        "Light-grayish-blue": "hsl(234, 14%, 74%)",
        "Grayish-blue" : " hsl(233, 13%, 49%)",
        "Dark-grayish-blue" : "hsl(232, 13%, 33%)"
      },
      
    },
  },
  plugins: [],
};