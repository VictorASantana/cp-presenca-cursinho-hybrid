import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const ButtonCardWrapperStyled = styled.TouchableOpacity`
  background-color: ${Theme.Colors.white};
  width: 75%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${Theme.Spacing.small}px;
  margin-top: ${Theme.Spacing.medium}px;
  margin-bottom: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.small}px;
`;

export const ButtonCardTextStyled = styled.Text`
  margin-left: ${Theme.Spacing.medium}px;
  font-size: ${Theme.Spacing.medium}px;
  font-weight: bold;
`;

