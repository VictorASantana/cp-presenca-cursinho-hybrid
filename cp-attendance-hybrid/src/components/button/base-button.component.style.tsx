import { Theme } from 'assets/theme/theme';
import styled from 'styled-components/native';

export const BaseButtonStyled = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: ${Theme.Spacing.small}px;
  background-color: ${Theme.Colors.primary};
  height: ${Theme.Spacing.halfGutter}px;
  font-size: ${Theme.Spacing.xSmall}px;
  padding: 8px 0;
`;

export const BaseButtonTextStyled = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;