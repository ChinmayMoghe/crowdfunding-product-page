import React from 'react';
import styled from 'styled-components';
import { GridItem } from './common-elements';
import { getLayout, useMediaQuery } from './context/MediaQueryProvider';
import { GridItemProps } from './interfaces';

interface HeaderItemProps extends GridItemProps {
  backgroundImgUrl: string;
}

const HeaderItem = styled(GridItem)<HeaderItemProps>`
  background-image: ${(props) => props.backgroundImgUrl};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

const Header: React.FC = () => {
  const mediaQuery = useMediaQuery();
  const backgroundImgUrls: Record<string, string> = {
    mobile: `url('src/images/image-hero-mobile.jpg')`,
    desktop: `url('src/images/image-hero-desktop.jpg')`,
  };
  const gridItemprops: HeaderItemProps = {
    showBorder: false,
    gridRow: '1/4',
    gridCol: '1/6',
    backgroundImgUrl: backgroundImgUrls[getLayout(mediaQuery)],
  };
  return <HeaderItem {...gridItemprops}></HeaderItem>;
};

export default Header;
