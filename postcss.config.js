const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')(),
    tailwindcss('./tailwind.config.js'),
  ],
};
