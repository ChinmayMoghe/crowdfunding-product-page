import React, { useState } from 'react';
import styled from 'styled-components';
import { GridItem } from './common-elements';
import { GridItemProps } from './interfaces';
import { ProgressBar } from './common-elements';

const Funding = styled(GridItem)`
  grid-row: 5/6;
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BackersDetails = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  margin-top: 2rem;
`;

const Items = styled.div`
  width: 75%;
  &:nth-of-type(even) {
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    padding: 0 2rem;
    margin: 0 2rem;
  }
  & > span {
    display: inline-block;
    width: 100%;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.neutral.light};
    margin-top: 0.5rem;
  }
  & > strong {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ProjectFunding: React.FC = () => {
  const gridItemProps: GridItemProps = {
    hasBackgroundColor: true,
    showBorder: true,
  };
  const getRndInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  const [fundingProgress, setFundingProgress] = useState(getRndInteger(30, 50));
  return (
    <Funding {...gridItemProps}>
      <BackersDetails>
        <Items>
          <strong>$89,914</strong>
          <span>of $100,000 backed</span>
        </Items>
        <Items>
          <strong>5,007 </strong>
          <span>total backers</span>
        </Items>
        <Items>
          <strong>56 days</strong>
          <span>left</span>
        </Items>
      </BackersDetails>
      <ProgressBar
        margin={'1rem 0 2rem 0'}
        width={85}
        height='1rem'
        completedPercent={fundingProgress}
      />
    </Funding>
  );
};

export default ProjectFunding;
