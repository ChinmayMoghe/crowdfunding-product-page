import React from 'react';
import styled from 'styled-components';
import { GridItem } from './elements';
import { GridItemProps } from './interfaces';

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

const ContainerStyle = styled.div`
  height: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background.body};
  border-radius: 10px;
  width: 75%;
  margin: 50px 0;
`;

const FillerStyle = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary.light};
`;

const ProjectFunding: React.FC = () => {
  const gridItemProps: GridItemProps = {
    hasBackgroundColor: true,
    showBorder: true,
  };
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
      <ContainerStyle>
        <FillerStyle />
      </ContainerStyle>
    </Funding>
  );
};

export default ProjectFunding;
