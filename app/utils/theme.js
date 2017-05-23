import { keyframes } from 'styled-components';

const theme = {
  borderWidth: 1,
  borderRadius: 4,
  colors: {
    white: '#FFF',
    black: '#222',
    transparent: 'transparent',
    grayDarker: '#CAD0D2',
    gray: '#e7e7e7',
    grayLighter: '#f8f8f8',
    cook: '#BF263C',
    cookLighter: '#D8334A',
    gourmet: '#2ABA66',
    gourmetLighter: '#2ECC71',
    default: '#967ADC',
    defaultLighter: '#AC92EC',
    info: '#11FFEA',
    success: '#40E59B',
    warning: '#FFC32F',
    error: '#E84548',
  },
  fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
  screenSize: {
    giant: 1170,
    desktop: 992,
    tablet: 768,
    phone: 420,
  },
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const pulseGourmet = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(42, 186, 102, 1);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

const pulseCook = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(191, 38, 60, 1);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(204,169,44, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
`;

export const animations = {
  fadeIn,
  pulseGourmet,
  pulseCook,
};

export default theme;
