const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
        './src/**/*.vue'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                rose: colors.rose
            }
        },
    },
    variants: {
        extend: {
            textOpacity: ['hover'],
            backgroundColor: ['active'],
        },
    },
    plugins: [],
}
