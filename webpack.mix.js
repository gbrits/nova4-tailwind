const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix
.postCss(
    'resources/css/tailwind.css', 
    'dist/tailwind-supplement.css', 
    [
        tailwindcss('tailwind.config.js')
    ]
);
