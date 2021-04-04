import React from 'react';
import { Grid } from './elements';

interface wrapperProps {
  children: React.ReactNode;
}

const Container: React.FC<wrapperProps> = ({ children }) => {
  return <Grid>{children}</Grid>;
};

export default Container;
