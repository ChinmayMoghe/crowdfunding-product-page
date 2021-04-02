import React from 'react';
import styled from 'styled-components';
import { GridItem } from './elements';
import { GridItemProps } from './interfaces';

const Info = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoLogo = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  transform: translateY(-50%);
`;

const ProjectInfo: React.FC = () => {
  const gridItemprops: GridItemProps = {
    row: {
      start: 3,
      end: 5,
    },
    col: {
      start: 3,
      end: 4,
    },
  };
  return (
    <Info {...gridItemprops}>
      <InfoLogo src='src/images/logo-mastercraft.svg' alt='Mastercraft logo' />
      <div>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
    </Info>
  );
};

export default ProjectInfo;
