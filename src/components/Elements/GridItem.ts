import styled from 'styled-components';
import { GridItemProps } from '../interfaces';

export const GridItem = styled.div<GridItemProps>`
  grid-row: ${(props) => `${props.row.start} / ${props.row.end}`};
  grid-column: ${(props) => `${props.col.start}/ ${props.col.end}`};
  border: 1px solid black;
`;
