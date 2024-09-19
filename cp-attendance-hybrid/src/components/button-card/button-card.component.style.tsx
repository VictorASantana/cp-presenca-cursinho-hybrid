import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const ButtonCardWrapperStyled = styled.TouchableOpacity`
  background-color: ${Theme.Colors.white};
  width: 75%;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 8px;
`;

export const ButtonCardTextStyled = styled.Text<{color: string}>`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.color};
`;

