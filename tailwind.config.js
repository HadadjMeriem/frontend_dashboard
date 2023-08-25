module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#FAFBFB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://c8.alamy.com/comp/2C04XNH/online-doctor-appointment-female-doctor-on-the-smartphone-screen-vector-illustration-in-flat-style-2C04XNH.jpg')",
        },
        '.circle-ring': {
          position: 'relative',
        },
        '.circle-progress': {
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '50%',
          backgroundColor: '#38a169',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          transformOrigin: 'center bottom',
          transition: 'transform 0.3s ease-in-out',
        },
      },
      
    },
    plugins: [],
    
  };