const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: { ...colors.blue, '700': '#52a1b0' },
      },
    },
  },
};
