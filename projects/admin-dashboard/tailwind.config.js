/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))'
      },
      colors: {
        primary: '#F60621',
        // red: {
        //   l1: '#fa9e93',
        //   l10: '#f25869',
        //   DEFAULT: '#F60621'
        // },
        red: {
          l1: '#fa9e93', // light
          DEFAULT: '#F60621', // bg-red
          d1: '#f00' // dark
        },
        blue: {
          l1: '#28a785',
          DEFAULT: '#28a745'
        },
        gray: {
          l10: '#023668',
          l1: '#eeeeee',
          l9: '#999999',
          l11: '#212592',
          DEFAULT: '#212529',
          d1: '#b2b2b2',
          d2: '#5f5f5f'
        },
        yellow: {
          DEFAULT: '#ffc107'
        },
        black: {
          l1: '#212529',
          DEFAULT: '#000000'
        }
      }
    }
  },
  plugins: []
}
