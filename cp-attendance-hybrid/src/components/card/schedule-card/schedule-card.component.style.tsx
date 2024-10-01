import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

interface ScheduleCardProps {
  color: string;
  cardHeight: number; 
  cardTop: number
}

export const ScheduleCardStyled = styled.View<ScheduleCardProps>`
  position: absolute;
  background-color: ${props => props.color};
  border-radius: ${Theme.Spacing.small}px;
  width: ${Theme.Spacing.gutter / 1.5}px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  top: ${({ cardTop }) => cardTop}px;
  height: ${({ cardHeight }) => cardHeight}px;
  margin: 2px;
`;

export const ScheduleCardTextStyled = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Theme.Colors.white};
`;

export const ScheduleCardHourStyled = styled.Text`
  font-size: 12px;
  color: ${Theme.Colors.white};
`;

