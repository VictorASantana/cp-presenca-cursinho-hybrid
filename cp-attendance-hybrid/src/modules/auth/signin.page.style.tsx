import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const SiginContainerStyled = styled.View`
  flex: 1;
  background-color: ${Theme.Colors.secondary};
  justify-content: center;
  align-items: center;
`;

export const SignBodyStyled = styled.View`
  flex: 0.6;
  background-color: ${Theme.Colors.white};
  border-top-left-radius: ${Theme.Spacing.halfGutter}px;
  position: absolute;
  width: 100%;
  height: 70%;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const ButtonAreaStyled = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SigninTitle = styled.Text`
  margin-top: ${Theme.Spacing.large}px;
  font-size: ${Theme.Spacing.xLarge}px;
  font-weight: bold;
`;
