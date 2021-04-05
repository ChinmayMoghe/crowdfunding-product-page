import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem } from './elements';
import { GridItemProps } from './interfaces';

const Description = styled(GridItem)`
  grid-row-start: 6;
  grid-column: 3/ 4;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  padding: 20px;
  & > p {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const PledgeContainer = styled(Grid)`
  width: 100%;
  height: 30vh;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.neutral.light};
  margin-top: 40px;
  grid-template-columns: 30px 2fr 3fr 2fr 30px;
  grid-template-rows: 20px 1fr 3fr 2fr 20px;
  row-gap: 0;
  & > h3 {
    grid-row: 2/3;
    grid-column: 2/3;
    place-self: bottom;
    justify-self: left;
  }
  & > span.pledge {
    grid-row: 2/3;
    grid-column: 4/5;
    place-self: center;
  }
  & > span.pledge-info {
    grid-row: 3/4;
    grid-column: 2/5;
    place-self: center;
    font-size: 1.1rem;
    line-height: 2.1;
    text-align: justify;
  }
`;

const ProjectDescription: React.FC = () => {
  const gridItemProps: GridItemProps = {
    showBorder: true,
    hasBackgroundColor: true,
  };
  return (
    <Description {...gridItemProps}>
      <Container>
        <h2>About this project</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        {/* Pledge component start */}
        <PledgeContainer>
          <h3>Bamboo stand</h3>
          <span className='pledge'>Pledge $25 or more</span>
          <span className='pledge-info'>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </span>
        </PledgeContainer>
        {/* Pledge component end */}
      </Container>
    </Description>
  );
};

export default ProjectDescription;
