import React from 'react';
import styled from 'styled-components';

interface IProgessContainer {
  width: number;
  height: string;
}

interface IProgressFiller {
  completedPercent: number;
}

interface ProgressBarProps extends IProgessContainer, IProgressFiller {}

const ContainerStyle = styled.div<IProgessContainer>`
  height: 10px;
  width: 100%;
  background-color: #d5d5d5;
  border-radius: 10px;
  width: 75%;
  margin: 50px 0;
`;

const FillerStyle = styled.div<IProgressFiller>`
  height: 100%;
  width: ${(props) => `${props.completedPercent}%`};
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary.light};
`;

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completedPercent,
  width,
  height,
}) => {
  return (
    <ContainerStyle width={width} height={height}>
      <FillerStyle completedPercent={completedPercent} />
    </ContainerStyle>
  );
};
