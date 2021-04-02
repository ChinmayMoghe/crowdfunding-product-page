import styled from 'styled-components';

export const Grid = styled.div.attrs((props) => ({
  'data-id': 'Grid',
}))`
  width: 100%;
  background-color: yellow;
  display: grid;
  grid-template-columns: 12% 12% 51% 12% 12%;
  grid-auto-rows: minmax(8%, auto);
  row-gap: 10px;
`;
