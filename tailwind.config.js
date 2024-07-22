/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xml: "412px",
      // => @media (min-width: 412px) { ... }

      xs: '360px',
      // => @media (min-width: 350px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      "2xl": '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Mulish: ["Mulish", 'sans-serif']
    },
    colors: {
      Primary: ['#22D1EE'],
      Sprimary: ['#19adc7'],
      Secondary: ["#17B978"],
      Accent: ["#E2F3F5"],
      white: ["#fff"],
      black: ["#000"]
    },
    keyframes: {
      'gb-popup-slide-zoom-right': {
        '0%': {
          opacity: '0',
          transformOrigin: '0% 50%',
          transform: 'scale(0.2) translate(-200%, 0%)',
        },
        '100%': {
          opacity: '1',
          transformOrigin: '0% 50%',
          transform: 'scale(1) translate(0%, 0%)',
        },
      },
      'slide-border-bottom': {
        '0%': {
          width: '0%',
          transform: 'translateX(0%)',
        },
        '100%': {
          width: '100%',
          transform: 'translateX(0)',
        },
      },
      'scale-up': {
        '0%': {
          transform: 'scale(1)',
        },
        '100%': {
          transform: 'scale(1.1)',
        },
      },
      'bounce-sideways': {
        '0%, 100%': {
          transform: 'translateX(0)',
        },
        '50%': {
          transform: 'translateX(-10px)',
        },
      },
      'bounce-to-bottom': {
        '0%': {
          transform: 'translateY(-500px)',
          animationTimingFunction: 'ease-in',
          opacity: 0,
        },
        '38%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'ease-out',
          opacity: 1,
        },
        '55%': {
          transform: 'translateY(-65px)',
          animationTimingFunction: 'ease-in',
        },
        '72%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'ease-out',
        },
        '81%': {
          transform: 'translateY(-28px)',
          animationTimingFunction: 'ease-in',
        },
        '90%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'ease-out',
        },
        '95%': {
          transform: 'translateY(-8px)',
          animationTimingFunction: 'ease-in',
        },
        '100%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'ease-out',
        },
      },
      'gb-popup-flip-page': {
        '0%': {
          opacity: 0,
          transformOrigin: '50% 0',
          transform: 'perspective(800px) rotateY(-180deg) translateZ(300px)',
        },
        '100%': {
          opacity: 1,
          transformOrigin: '0 0',
          transform: 'perspective(800px) rotateY(0deg) translateZ(0px)',
        },
      },
    },
    animation: {
      'gb-popup-slide-zoom-right': 'gb-popup-slide-zoom-right 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
      'slide-border-bottom': 'slide-border-bottom 0.5s forwards',
      'scale-up': 'scale-up 0.3s forwards',
      'bounce-sideways': 'bounce-sideways 1s infinite',
      'bounce-to-bottom': 'bounce-to-bottom 1.1s both',
      'gb-popup-flip-page': 'gb-popup-flip-page 1s both',
    },
  },
  plugins: [],
}