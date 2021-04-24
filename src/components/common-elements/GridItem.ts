import styled from 'styled-components';
import { GridItemProps } from '../interfaces';

export const GridItem = styled.div<GridItemProps>`
  border-radius: ${(props) =>
    props.showBorder ? props.theme.border.borderRadius : `0`};
  border-width: ${(props) =>
    props.showBorder ? props.theme.border.borderWidth : `0`};
  border-style: solid;
  border-color: ${(props) => (props.showBorder ? `#f6f6f6` : 'transparent')};
  background-color: ${(props) =>
    props.hasBackgroundColor
      ? props.theme.colors.background.items
      : 'transparent'};
`;
