import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem, RoundedButton } from './common-elements';
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
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background.items};
  border: 1px solid #dfdfdf;
  margin-top: 40px;
  grid-template-columns: 30px 2fr 3fr 2fr 30px;
  grid-template-rows: 20px 1fr 3fr 2fr 20px;
  row-gap: 0;
`;

const Pledge = styled(GridItem)`
  grid-row: 2/3;
  grid-column: 4/5;
  place-self: center;
  justify-self: right;
`;
const PledgeInfo = styled(GridItem)`
  grid-row: 3/4;
  grid-column: 2/5;
  place-self: center;
  font-size: 1.2rem;
  line-height: 1.9;
  text-align: justify;
`;

const PledgeTitle = styled.h3`
  grid-row: 2/3;
  grid-column: 2/3;
  place-self: center;
  justify-self: left;
  font-size: 1.5rem;
`;

const ItemsLeft = styled.div`
  grid-row: 4/5;
  grid-column: 2/3;
  place-self: center;
  justify-self: left;
  display: flex;
  align-items: center;

  & > .left-label {
    display: inline-block;
    padding-left: 5px;
  }
`;
const SelectReward = styled(RoundedButton)`
  grid-row: 4/5;
  grid-column: 4/5;
  place-self: center;
`;

const ItemCount = styled.span`
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: 2.5rem;
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
          <PledgeTitle>Bamboo stand</PledgeTitle>
          <Pledge>Pledge $25 or more</Pledge>
          <PledgeInfo>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </PledgeInfo>
          <ItemsLeft>
            <ItemCount>101</ItemCount>
            <span className='left-label'>left</span>
          </ItemsLeft>
          <SelectReward width='150px' height='40px'>
            Select Reward
          </SelectReward>
        </PledgeContainer>
        {/* Pledge component end */}
      </Container>
    </Description>
  );
};

export default ProjectDescription;
