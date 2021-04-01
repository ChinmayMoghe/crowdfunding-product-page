import React from 'react';
import {
  Container,
  Header,
  ProjectInfo,
  ProjectFunding,
  ProjectDescription,
} from './components';

const App = () => {
  return (
    <Container>
      <Header />
      <ProjectInfo />
      <ProjectFunding />
      <ProjectDescription />
    </Container>
  );
};

export default App;
