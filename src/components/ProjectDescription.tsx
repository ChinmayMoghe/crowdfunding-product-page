import React from 'react';
import styled from 'styled-components';
import { GridItem } from './common-elements';
import { GridItemProps } from './interfaces';
import { PledgeCard } from './PledgeCard';

const Description = styled(GridItem)`
  grid-row-start: 6;
  grid-column: 3/ 4;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  padding: 2rem;
  & > p {
    font-size: 1.5rem;
    margin-top: 2.5rem;
  }
`;

const ProjectDescription: React.FC = () => {
  const gridItemProps: GridItemProps = {
    showBorder: true,
    hasBackgroundColor: true,
  };
  const getPledgeCards = () => {
    const PledgeCardsDetails = [
      {
        version: 'Bamboo Stand',
        pledgeAmount: 25,
        message: `You get an ergonomic stand made of natural bamboo.
        You've helped us launch  our promotional campaign, and you'll be added to a special Backer member list.`,
        left: 101,
      },
      {
        version: 'Black Edition Stand',
        pledgeAmount: 75,
        message: `You get a Black Special Edition computer stand and a personal thank you. 
      You'll be added to our Backer member list. Shopping is included.`,
        left: 64,
      },
      {
        version: 'Mahogany Special Edition',
        pledgeAmount: 200,
        message: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
      You'll be added to our Backer member list.Shipping is included.`,
        left: 0,
      },
    ];
    return PledgeCardsDetails.map((card) => (
      <PledgeCard
        key={card.version}
        version={card.version}
        pledgeAmount={card.pledgeAmount}
        message={card.message}
        left={card.left}
      />
    ));
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
        <div style={{ marginBottom: '2rem' }}>{getPledgeCards()}</div>
      </Container>
    </Description>
  );
};

export default ProjectDescription;
