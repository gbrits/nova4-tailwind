const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  safelist: [
    {
      pattern: /^table-/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /hidden/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /table/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /td-fit/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /flex/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /block/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /^inline-/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /^w-/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
    {
      pattern: /^(m[trblxy]?-)/, // Matches all margin classes
      variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Include responsive variants
    },
  ],
  content: [
    './dummy.html'
  ],
  theme: {
    extend: {
      screens: {
        ...defaultTheme.screens,
      },
      colors: {
        ...colors
      }
    }
  }
}