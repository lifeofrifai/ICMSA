module.exports = {
  content: [
    './public/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'icmsa-gray': '#F7FCFA',
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
