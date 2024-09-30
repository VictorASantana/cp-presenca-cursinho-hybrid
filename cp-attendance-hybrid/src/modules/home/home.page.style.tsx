import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const HomeHeaderStyled = styled.View`
  margin-top: ${Theme.Spacing.large}px;
  margin-left: ${Theme.Spacing.large}px;
  margin-right: ${Theme.Spacing.large}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HomeBodyStyled = styled.View`
  flex: 1;
  background-color: ${Theme.Colors.white};
  margin-top: ${Theme.Spacing.small}px;
  overflow: auto;
`;

export const HomeEmptyStyled = styled.View`
  flex: 0.5;
  background-color: ${Theme.Colors.gray};
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;
