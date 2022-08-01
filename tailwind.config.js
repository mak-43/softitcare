/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#bfd994",
          "secondary": "#9ed9da",
          "accent": "#576e6e",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#bab2e3",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        dark: {
          "primary": "#e3acd9",
          "secondary": "#59608e",
          "accent": "#588e8c",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#ded6be",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },

      {
        night: {
          "primary": "#5e306e",
          "secondary": "#8687bb",
          "accent": "#64877c",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#7c7a73",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      {
        cupcake: {
          "primary": "#633450",
          "secondary": "#4a3463",
          "accent": "#345563",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#346347",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}
