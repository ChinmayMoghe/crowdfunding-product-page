import React from 'react';
import {
  Container,
  Header,
  ProjectInfo,
  ProjectFunding,
  ProjectDescription,
  Navbar,
} from './components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { MediaQueryProvider } from './components/context/MediaQueryProvider';
import Modal from './components/modal/Modal';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Commissioner', sans-serif;
  }
  html {
    font-size: 62.5%;
  }
  body {
    width: 100vw;
  }
`;

/*media queries for app*/
const mediaQueries = {
  mobile: '(max-width:375px)',
  desktop: '(max-width:1440px) and (min-width:376px)',
};

const App = () => {
  return (
    <MediaQueryProvider queries={mediaQueries}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Navbar />
          <ProjectInfo />
          <ProjectFunding />
          <ProjectDescription />
          <Modal />
        </Container>
      </ThemeProvider>
    </MediaQueryProvider>
  );
};

export default App;
