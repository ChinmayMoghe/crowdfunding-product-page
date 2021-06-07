import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridItem, Logo } from './common-elements';
import { GridItemProps } from './interfaces';
import { useMediaQuery, getLayout } from './context/MediaQueryProvider';

const NavbarContainer = styled(GridItem)`
  display: flex;
  align-items: center;
`;

const CrowdFundLogo = styled(Logo)`
  max-width: 100%;
  height: auto;
  margin-right: auto;
`;
const Link = styled.a`
  color: white;
  font-size: 1.7rem;
  display: inline-block;
  transition: all 0.2s;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const NavSection = styled.nav`
  display: flex;
  justify-content: space-between;
  justify-self: flex-end;
  width: 20vw;
`;

const Navbar: React.FC = () => {
  const mediaQuery = useMediaQuery();
  const mediaColumns: Record<string, string> = {
    mobile: '3/4',
    desktop: '2/5',
  };
  const gridItemProps: GridItemProps = {
    hasBackgroundColor: false,
    showBorder: false,
    gridRow: '1/2',
    gridCol: mediaColumns[getLayout(mediaQuery)],
  };

  return (
    <NavbarContainer {...gridItemProps}>
      <CrowdFundLogo src='src/images/logo.svg' alt='crowdfund logo' />
      <NavSection>
        <Link>About</Link>
        <Link>Discover</Link>
        <Link>Get Started</Link>
      </NavSection>
    </NavbarContainer>
  );
};

export default Navbar;
