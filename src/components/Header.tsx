import React from 'react';
import styled from 'styled-components';
import { GridItem, Logo } from './common-elements';
import { GridItemProps } from './interfaces';

const HeaderItem = styled(GridItem)`
  background-image: url('src/images/image-hero-desktop.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  grid-row: 1/4;
  grid-column: 1/6;
  @media screen and (max-width: 375px) {
    background-image: url('src/images/image-hero-mobile.jpg');
  }
`;

const Header: React.FC = () => {
  const gridItemprops: GridItemProps = {
    showBorder: false,
  };
  return <HeaderItem {...gridItemprops}></HeaderItem>;
};

export default Header;
