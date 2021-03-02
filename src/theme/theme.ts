const breakpoints = ['768px', '1200px', '1500px'];

const colors = {
  blue: '#022041',
  lightBg: '#E0E7EE',
  bodyBg: '#E0E7EE54',
  border: '#5D5E60',
  text: '#022041',
  sidebar: '#F9F9F9',
  white: '#fff',
  title: ['#2E2925'],
  gray: ['#999999', '#5c5d62', '#4A4B4B', '#e4e7ee'],
  disabled: '#BFBFBF',
  link: ['#7CAFFC', '#7793FC'],
  error: ['#ff0033'],
};

const fonts = {
  OS: 'Oswald',
  MO: 'Montserrat',
};

const space = [
  '0',
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '4rem',
  '5rem',
];

const fontSizes = {
  xs: '.75rem',
  sm: '.875rem',
  base: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.5rem',
  xl2: '1.875rem',
  xl3: '2.25rem',
  xl4: '3rem',
  xl5: '4rem',
};

const radii = {
  sm: '0.125rem',
  base: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
};

const shadows = {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xxl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
};

const theme = {
  breakpoints,
  fonts,
  colors,
  shadows,
  fontSizes,
  radii,
  space,
};

export default theme;
