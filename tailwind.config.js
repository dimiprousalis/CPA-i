/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      custom: ['Dosis', 'sans-serif'],
      landing: ['Roboto Mono', 'monospace'],
    },

    extend: {
      screens: {
        'sm': '500px',
        'md': '700px',
        'lg': '1000px',
      },
      colors: {
        'primary': {
          '50': '#eef2ff',
          '100': '#e1e7fe',
          '200': '#c7d2fd',
          '300': '#a7b5fa',
          '400': '#838ef6',
          '500': '#6569ef',
          '600': '#5049e2',
          '700': '#443bc7',
          '800': '#3932a1',
          '900': '#322f80',
          '950': '#1f1c4a',
        },
        'secondary': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#8a8a8a',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        'pinkAccent': {
          '50': '#fef2f2',
          '100': '#fde3e4',
          '200': '#fccacb',
          '300': '#f9a8aa',
          '400': '#f37678',
          '500': '#e94a4d',
      },
      'yellowAccent': {
        '50': '#fefbe7',
        '100': '#fef6c3',
        '200': '#feeb8b',
        '300': '#fdd649',
        '400': '#fac114',
    },
    
      
      },
    },
  },
  plugins: [],
}

