import styled from 'styled-components';

interface GridProps {
  width: string;
  columns: string;
  rows: string;
  rowGap?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  width: ${(props) => props.width};
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  row-gap: ${(props) => props.rowGap};
  background-color: ${(props) => props.theme.colors.background.body};
`;
