import React from 'react';
import styled from 'styled-components';
import { Logo, RoundedButton } from '../../../common-elements';

const FlexContainer = styled.div`
  width: 30vw;
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5vw;
`;

const StrongText = styled.strong`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  text-align: justify;
  line-height: 1.7;
  margin-bottom: 5rem;
`;

const CheckLogo = styled(Logo)`
  margin-bottom: 2rem;
`;

const ThanksContent = () => (
  <FlexContainer>
    <CheckLogo src='src/images/icon-check.svg' />
    <StrongText>Thanks for your support!</StrongText>
    <Message>
      Your pledge brings us one step closer to sharing Mastercraft Bamboo
      Monitor Riser worldwide. You will get an email once our campaign is
      completed.
    </Message>
    <RoundedButton width='10rem' height='5rem'>
      Got it !
    </RoundedButton>
  </FlexContainer>
);

export default ThanksContent;
