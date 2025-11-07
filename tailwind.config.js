module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2c3e50',
        light: {
          text: '#333',
          bg: '#f9f9f9',
          card: '#fff',
          nav: 'rgba(255, 255, 255, 0.9)'
        },
        dark: {
          text: '#f8f9fa',
          bg: '#121212',
          card: '#1e1e1e',
          nav: 'rgba(30, 30, 30, 0.9)'
        }
      },
      boxShadow: {
        custom: '0 5px 15px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 5px 15px rgba(0, 0, 0, 0.3)'
      },
      transitionProperty: {
        'all': 'all'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // Add other plugins if needed
  ],
}