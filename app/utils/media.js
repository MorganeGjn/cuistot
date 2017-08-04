import { css } from 'styled-components';

export const media = {
  xs: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  sm: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1201px) {
      ${css(...args)}
    }
  `
};
