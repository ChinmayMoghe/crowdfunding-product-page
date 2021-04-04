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

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Navbar />
          <ProjectInfo />
          <ProjectFunding />
          <ProjectDescription />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
