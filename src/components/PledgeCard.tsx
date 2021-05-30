import React from 'react';
import styled from 'styled-components';
import { Grid, GridItem, RoundedButton } from './common-elements';

const PledgeContainer = styled(Grid)`
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background.items};
  border: 1px solid #dfdfdf;
  margin-top: 4rem;
  grid-template-columns: 3rem 2fr 3fr 2fr 3rem;
  grid-template-rows: 2rem 1fr 3fr 2fr 2rem;
  row-gap: 1rem;
`;

const PledgeAmount = styled(GridItem)`
  grid-row: 2/3;
  grid-column: 4/5;
  place-self: center;
  justify-self: right;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary.light};
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
  grid-column: 2/4;
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
    padding-left: 0.5rem;
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

interface PledgeCardProps {
  version: string;
  pledgeAmount: number;
  message: string;
  left: number;
}

export const PledgeCard: React.FC<PledgeCardProps> = ({
  version,
  pledgeAmount,
  left,
  message,
}) => {
  return (
    <PledgeContainer>
      <PledgeTitle>{version}</PledgeTitle>
      <PledgeAmount>Pledge ${pledgeAmount} or more</PledgeAmount>
      <PledgeInfo>{message}</PledgeInfo>
      <ItemsLeft>
        <ItemCount>{left}</ItemCount>
        <span className='left-label'>left</span>
      </ItemsLeft>
      <SelectReward
        width='15rem'
        height='4rem'
        disabled={left > 0 ? false : true}
      >
        {left > 0 ? 'Select Reward' : 'Out of Stock'}
      </SelectReward>
    </PledgeContainer>
  );
};