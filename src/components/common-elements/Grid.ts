import styled from 'styled-components';

export const Grid = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background.body};
  display: grid;
  grid-template-columns: repeat(2, 12%) 1fr repeat(2, 12%);
  grid-template-rows:
    10vh minmax(30vh, max-content) 6rem minmax(calc(30vh - 6rem), 15rem)
    minmax(15rem, 30vh) 1fr 10vh;
  row-gap: 1rem;
  @media screen and (max-width: ${(props) => props.theme.screen.mobile}) {
    grid-template-columns: 3% 3% 88% 3% 3%;
  }
`;
