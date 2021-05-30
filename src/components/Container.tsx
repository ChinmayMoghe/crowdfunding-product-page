import React from 'react';
import { Grid } from './common-elements';
import { useMediaQuery } from './context/MediaQueryProvider';

interface wrapperProps {
  children: React.ReactNode;
}

const Container: React.FC<wrapperProps> = ({ children }) => {
  const x = useMediaQuery();
  console.log(x);
  return <Grid>{children}</Grid>;
};

export default Container;
