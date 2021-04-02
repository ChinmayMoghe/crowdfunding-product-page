import React from 'react';
import { Grid } from './elements';

interface wrapperProps {
  children: React.ReactNode;
}

const Container: React.FC<wrapperProps> = ({ children }) => {
  return (
    <Grid>
      This is a Layout wrapper
      {children}
    </Grid>
  );
};

export default Container;
