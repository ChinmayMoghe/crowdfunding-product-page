import React from 'react';
import { Grid } from './common-elements';
import { useMediaQuery, getLayout } from './context/MediaQueryProvider';

interface wrapperProps {
  children: React.ReactNode;
}

const Container: React.FC<wrapperProps> = ({ children }) => {
  const mediaQuery = useMediaQuery();

  const mediaColumns: Record<string, string> = {
    mobile: '3% 3% 88% 3% 3%',
    desktop: 'repeat(2, 12%) 1fr repeat(2, 12%)',
  };

  const gridProps = {
    width: '100vw',
    columns: mediaColumns[getLayout(mediaQuery)],
    rows: '10vh minmax(30vh, max-content) 6rem minmax(calc(30vh - 6rem), 15rem) minmax(15rem, 30vh) 1fr 10vh',
    rowGap: '1rem',
  };
  return <Grid {...gridProps}>{children}</Grid>;
};

export default Container;
