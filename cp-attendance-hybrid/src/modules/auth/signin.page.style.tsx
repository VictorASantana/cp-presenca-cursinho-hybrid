import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const SiginContainerStyled = styled.View`
  flex: 1;
  background-color: ${Theme.Colors.secondary};
  justify-content: flex-start;
  align-items: center;
`;

export const SigninLogoStyled = styled.View`
  background-color: ${Theme.Colors.white};
  margin-top: ${Theme.Spacing.halfGutter}px;
  border-radius: 16px;
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
`

export const SignBodyStyled = styled.View<{ isKeyboardVisible: boolean }>`
  background-color: ${Theme.Colors.white};
  border-top-left-radius: ${Theme.Spacing.halfGutter}px;
  position: absolute;
  width: 100%;
  height: ${props => props.isKeyboardVisible ? '60%' : '70%'};
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const ButtonAreaStyled = styled.View<{ isKeyboardVisible: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.isKeyboardVisible ? Theme.Spacing.gutter / 2.5 : Theme.Spacing.gutter * 2}px;
`;

export const SigninTitle = styled.Text`
  margin-top: ${Theme.Spacing.large}px;
  font-size: ${Theme.Spacing.xLarge}px;
  font-weight: bold;
`;

export const ForgetPassword = styled.Text`
  margin-top: ${Theme.Spacing.small}px;
  font-size: 16px;
  color: ${Theme.Colors.secondary};
`
