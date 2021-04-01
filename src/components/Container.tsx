import React from 'react';
import styled from 'styled-components';

interface wrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div.attrs((props) => ({
  'data-id': 'LayoutWrapper',
}))`
  width: 100%;
  background-color: yellow;
`;

const Container: React.FC<wrapperProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      This is a Layout wrapper
      {children}
    </LayoutWrapper>
  );
};

export default Container;
