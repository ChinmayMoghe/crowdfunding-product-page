import React, { useState } from 'react';
import styled from 'styled-components';
import { GridItem } from './elements';
import { GridItemProps } from './interfaces';
import { ProgressBar } from './elements';

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
  margin-top: 50px;
`;

const Items = styled.div`
  width: 75%;
  &:nth-of-type(even) {
    border-left: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    padding: 0 20px;
    margin: 0 20px;
  }
  & > span {
    display: inline-block;
    width: 100%;
  }
  & > h2 {
    margin-bottom: 10px;
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
          <h2>$89,914</h2>
          <span>of $100,000 backed</span>
        </Items>
        <Items>
          <h2>5,007 </h2>
          <span>total backers</span>
        </Items>
        <Items>
          <h2>56 days</h2>
          <span>left</span>
        </Items>
      </BackersDetails>
      <ProgressBar
        width={85}
        height='10px'
        completedPercent={fundingProgress}
      />
    </Funding>
  );
};

export default ProjectFunding;
