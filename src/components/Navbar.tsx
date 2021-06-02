import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GridItem, Logo } from './common-elements';
import { GridItemProps } from './interfaces';

const NavbarContainer = styled(GridItem)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (min-width: 376px) and (max-width: 1440px) {
    grid-row: 1/2;
    grid-column: 2/5;
  }
  @media screen and (max-width: 375px) {
    grid-row: 1/2;
    grid-column: 3/4;
  }
`;

const CrowdFundLogo = styled(Logo)`
  max-width: 100%;
  height: auto;
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
  width: 20vw;
`;

const Navbar: React.FC = () => {
  const gridItemProps: GridItemProps = {
    hasBackgroundColor: false,
    showBorder: false,
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
