import React from 'react';
import styled from 'styled-components';
import ThanksContent from './content/thanksContent';

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div`
  min-width: 22vw;
  min-height: 22vw;
  background-color: ${(props) => props.theme.colors.background.body};
  border-radius: 1.5rem;
  padding: 3.68vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal: React.FC = (props) => (
  <ModalOverlay>
    <ModalContent>
      <ThanksContent />
    </ModalContent>
  </ModalOverlay>
);

export default Modal;
