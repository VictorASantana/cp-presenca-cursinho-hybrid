import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

interface ProgressBarProps {
  progress: number; // Valor de progresso de 0 a 100
  height?: number;
  borderRadius?: number;
}

export const ProgressBarContainer = styled.View<Pick<ProgressBarProps, 'height' | 'borderRadius'>>`
  width: 100%;
  background-color: ${Theme.Colors.white};
  border-radius: ${({ borderRadius }) => borderRadius || 10}px;
  height: ${({ height }) => height || 20}px;
  margin-top: ${Theme.Spacing.small}px;
`;

export const Progress = styled.View<Pick<ProgressBarProps, 'progress'>>`
  width: ${({ progress }) => progress}%;
  background-color: ${Theme.Colors.primary};
  height: 100%;
  border-radius: 10px;
`;
