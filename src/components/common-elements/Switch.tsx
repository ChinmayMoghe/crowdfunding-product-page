import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  position: relative;
  width: 170px;
  font-size: 1.5rem;
`;

const CheckBoxLabel = styled.label`
  background-color: #f4f4f4;
  color: ${(props) => props.theme.colors.neutral.light};
  font-weight: 700;
  position: absolute;>[]
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 56px;
  border-radius: 56px;
  padding-left: calc(56px + 10px);
  transition: all 0.2s ease-in-out;
  &::before {
    content: url('src/images/icon-bookmark.svg');
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    transition: all 0.2s ease-in-out;
  }
`;

const CheckBox = styled.input.attrs((props) => ({
  type: props.type ? props.type : 'checkbox',
}))`
  position: absolute;
  left: 0;
  width: 170px;
  height: 56px;
  border-radius: 56px;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
  &:checked + ${CheckBoxLabel} {
    background-color: ${(props) => props.theme.colors.primary.light};
    color: ${(props) => props.theme.colors.background.items};
    padding-right: calc(56px - 10px);
    padding-left: 10px;
    &::before {
      content: url('src/images/icon-bookmarked.svg');
      left: 120px;
    }
  }
`;

interface SwitchProps {
  id: string;
  text: {
    checked: string;
    unchecked: string;
  };
}

export const Switch: React.FC<SwitchProps> = ({ id, text }) => {
  const [checked, setChecked] = useState(false);
  const onChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => {
    if (event) {
      setChecked(event.currentTarget.checked);
    }
  };
  return (
    <CheckBoxWrapper>
      <CheckBox id={id} onChange={onChange} checked={checked} />
      <CheckBoxLabel htmlFor={id}>
        <span>{checked ? text.checked : text.unchecked}</span>
      </CheckBoxLabel>
    </CheckBoxWrapper>
  );
};
