import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const MenuHeaderStyled = styled.View`
  background-color: #E42C3A;
  flex: 0.4;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const MenuHeaderInfoStyled = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 8%;
  padding: 4%;
`;

export const MenuHeaderPersonalStyled = styled.View`
  width: 100%;
  margin-left: 12px;
`;

export const MenuHeaderTitle = styled.Text`
  font-weight: bolder;
  font-size: 24px;
  color: ${Theme.Colors.white};
`;

export const MenuHeaderText = styled.Text`
  font-weight: lighter;
  font-size: 16px;
  color: ${Theme.Colors.white};
`;

export const MenuAreaViewStyled = styled.View`
    flex: 1;
    bottom: 0;
`;

export const MenuButtonAreaStyled = styled.View`
  width: 100%;
  margin-top: 20%;
  justify-content: center;
  align-items: center;
`
