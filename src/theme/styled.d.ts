// import original module declarations
import 'styled-components';

interface Colors {
  dark: string;
  light: string;
}

interface BackgroundColors {
  body: string;
  items: string;
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    screen: {
      mobile: string;
      desktop: string;
    };
    colors: {
      primary: Colors;
      neutral: Colors;
      background: BackgroundColors;
    };
    font: {
      weight: {
        light: number;
        medium: number;
        bold: number;
      };
      family: string;
    };
    border: {
      borderRadius: string;
      borderWidth: string;
    };
  }
}
