import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const GraphicContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PercentageText = styled.Text`
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: ${Theme.Colors.white};
`;
