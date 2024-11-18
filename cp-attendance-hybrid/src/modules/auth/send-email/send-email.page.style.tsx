import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const TopAreaView = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  left: 2px;
  top: 20px;
  padding: 2px;
`;

export const Description = styled.Text`
  color: ${Theme.Colors.darkGray};
  font-size: ${Theme.Spacing.medium}px;
`;