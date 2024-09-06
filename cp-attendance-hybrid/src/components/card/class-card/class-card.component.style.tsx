import { Theme } from 'assets/theme/theme';
import styled from 'styled-components/native';
import { rgba } from 'polished';

interface ClassCardStyledProps {
  numberOfClasses: number
  activated: boolean;
}

export const ClassCardStyled = styled.View<ClassCardStyledProps>`
  border-left: ${Theme.Spacing.border}px;
  border-color: ${Theme.Colors.secondary};
  background-color: ${props => props.activated ? rgba(228, 44, 58, 0.8) : rgba(187, 187, 187, 0.8)};
  border-radius: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.medium}px;
  height: ${props => props.numberOfClasses * 200}px;
`;

export const ClassCardTitleStyled = styled.Text`
  color: ${Theme.Colors.white};
  font-weight: bold;
  font-size: ${Theme.Spacing.large}px;
  margin: ${Theme.Spacing.small}px;
`;

export const ClassCardTextStyled = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Spacing.medium}px;
  margin: ${Theme.Spacing.small}px;
`;

export const ClassCardButtonStyled = styled.TouchableOpacity`
  border: ${Theme.Spacing.border}px;
  border-color: ${Theme.Colors.white};
  align-items: center;
  justify-content: center;
  border-radius: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.small}px;
  margin-top: ${Theme.Spacing.xLarge}px;
  margin-bottom: ${Theme.Spacing.small}px;
  margin-left: ${Theme.Spacing.small}px;
  margin-right: ${Theme.Spacing.small}px;
`;

export const ClassCardButtonTextStyled = styled.Text`
  color: ${Theme.Colors.white};
`;
