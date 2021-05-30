import React from 'react';
import styled from 'styled-components';

interface IProgessContainer {
  width: number;
  height: string;
  margin: string;
}

interface IProgressFiller {
  completedPercent: number;
}

interface ProgressBarProps extends IProgessContainer, IProgressFiller {}

const ContainerStyle = styled.div<IProgessContainer>`
  height: ${(props) => props.height};
  width: ${(props) => `${props.width}%`};
  margin: ${(props) => props.margin};
  background-color: #d5d5d5;
  border-radius: 10px;
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
  margin,
}) => {
  return (
    <ContainerStyle width={width} height={height} margin={margin}>
      <FillerStyle completedPercent={completedPercent} />
    </ContainerStyle>
  );
};
