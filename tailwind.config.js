module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tmdbDarkBlue: "rgb(3,37,65)",
        tmdbLightGreen: "rgb(30,213,169)",
        tmdbLightBlue: "rgb(1,180,228)",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%),url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/VlHt27nCqOuTnuX6bku8QZapzO.jpg')",
      },
    },
  },
  plugins: [],
};
