import { Theme } from 'assets/theme/theme';
import styled from 'styled-components/native';

export const ButtonModalStyled = styled.TouchableOpacity<{ outline: boolean, width?: number }>`
  align-items: center;
  justify-content: center;
  border-radius: ${Theme.Spacing.small}px;
  border-width: ${props => props.outline ? 1 : 0}px; 
  border-color: ${Theme.Colors.secondary}; 
  background-color: ${props => props.outline ? Theme.Colors.white : Theme.Colors.secondary};
  width: ${props => props.width ? props.width + 'px' : '100%'};
  height: ${Theme.Spacing.halfGutter}px;
  font-size: ${Theme.Spacing.xSmall}px;
  padding: 8px 0;
`;

export const ButtonModalTextStyled = styled.Text<{ outline: boolean }>`
  color: ${props => props.outline ? Theme.Colors.secondary : Theme.Colors.white};
  font-size: 16px;
  font-weight: bold;
`;