import React from 'react';
import {
  Container,
  Header,
  ProjectInfo,
  ProjectFunding,
  ProjectDescription,
} from './components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after{
    margin: 0;
    padding:0;
    box-sizing:border-box;
  }
  html {
    font-size: 16px;
    font-family: 'Commissioner', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ProjectInfo />
        <ProjectFunding />
        <ProjectDescription />
      </Container>
    </>
  );
};

export default App;
