import React from 'react';
import { GraphicContainer, PercentageText } from "./circular-graphic.component.styled";
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Theme } from 'assets/theme/theme';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 100,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <GraphicContainer>
      <Svg width={size} height={size}>
        <Circle
          stroke={Theme.Colors.white}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          stroke={Theme.Colors.primary}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <PercentageText>{`${percentage}%`}</PercentageText>
    </GraphicContainer>
  );
};