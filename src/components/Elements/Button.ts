import styled from 'styled-components';
import { RoundedButtonProps } from '../interfaces';

export const RoundedButton = styled.button.attrs((props) => ({
  type: props.type ? props.type : 'button',
}))<RoundedButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: calc(${(props) => props.height} / 2);
  border-color: transparent;
  border-width: 1px;
  border-style: solid;
  background-color: ${(props) => props.theme.colors.primary.light};
  color: ${(props) => props.theme.colors.background.items};
  font-weight: ${(props) => props.theme.font.weight.medium};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.1s ease-out;
  font-size: 1.5rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.dark};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.background.items};
    border-color: ${(props) => props.theme.colors.primary.dark};
    color: ${(props) => props.theme.colors.primary.dark};
    transform: translateY(4px) scale(0.9);
  }
`;
