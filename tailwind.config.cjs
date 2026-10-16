module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2c3e50',
        light: {
          text: '#333',
          bg: '#f9f9f9',
          card: '#fff',
          nav: 'rgba(255, 255, 255, 0.9)',
        },
        dark: {
          text: '#f8f9fa',
          bg: '#121212',
          card: '#1e1e1e',
          nav: 'rgba(30, 30, 30, 0.9)',
        },
      },
      boxShadow: {
        custom: '0 5px 15px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 5px 15px rgba(0, 0, 0, 0.3)',
      },
      transitionProperty: {
        all: 'all',
      },
      animation: {
        'skew-scroll': 'skew-scroll 36s linear infinite',
      },
      keyframes: {
        'skew-scroll': {
          '0%': {
            transform: 'rotateX(12deg) rotateZ(-7deg) skewX(7deg) translateY(0)',
          },
          '100%': {
            transform: 'rotateX(12deg) rotateZ(-7deg) skewX(7deg) translateY(-50%)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
