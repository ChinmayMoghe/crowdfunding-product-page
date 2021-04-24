import React from 'react';
import styled from 'styled-components';
import { RoundedButton, GridItem, Logo, Switch } from './common-elements';
import { GridItemProps, RoundedButtonProps } from './interfaces';

const Info = styled(GridItem)`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 3/5;
  grid-column: 3/4;
`;

const ProjectLogo = styled(Logo)`
  transform: translateY(-50%);
`;

const ControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  justify-content: space-around;
`;

const ProjectInfo: React.FC = () => {
  const gridItemprops: GridItemProps = {
    showBorder: true,
    hasBackgroundColor: true,
  };

  const buttonProps: RoundedButtonProps = {
    width: '170px',
    height: '56px',
  };

  const switchProps = {
    id: 'bookmark-switch',
    text: {
      checked: 'Bookmarked',
      unchecked: 'Bookmark',
    },
  };

  return (
    <Info {...gridItemprops}>
      <ProjectLogo
        src='src/images/logo-mastercraft.svg'
        alt='Mastercraft logo'
      />
      <div>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <ControlsWrapper>
        <RoundedButton {...buttonProps}>Back this project</RoundedButton>
        <Switch {...switchProps} />
      </ControlsWrapper>
    </Info>
  );
};

export default ProjectInfo;
