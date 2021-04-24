import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  screen: {
    mobile: '375px',
    desktop: '1440px',
  },
  colors: {
    primary: {
      dark: 'hsl(176, 72%, 28%)',
      light: 'hsl(176, 50%, 47%)',
    },
    neutral: {
      dark: 'hsl(0, 0%, 0%)',
      light: 'hsl(0,0%,53%)',
    },
    background: {
      body: '#fafafa',
      items: '#fff',
    },
  },
  font: {
    weight: {
      light: 400,
      medium: 500,
      bold: 700,
    },
    family: `'Commissioner', sans-serif`,
  },
  border: {
    borderRadius: '5px',
    borderWidth: '1px',
  },
};

export { theme };
