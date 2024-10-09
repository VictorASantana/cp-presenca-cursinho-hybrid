import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const ProfileHeaderStyled = styled.View`
  background-color: #E42C3A;
  flex: 0.6;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const TopAreaView = styled.View`
  position: absolute;
  top: 20;
  left: 5;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${Theme.Spacing.xxSmall}px;
`;

export const ProfileHeaderTitle = styled.Text`
  font-weight: bolder;
  font-size: 24px;
  color: ${Theme.Colors.white};
`;

export const ProfileHeaderText = styled.Text`
  font-weight: lighter;
  font-size: 16px;
  color: ${Theme.Colors.white};
  margin: 8px;
`;

export const ProfileAreaViewStyled = styled.View`
  flex: 1;
  bottom: 0;
`;

export const ProfileButtonAreaStyled = styled.View`
  width: 100%;
  margin-top: 20%;
  justify-content: center;
  align-items: center;
`

export const EditModalItem = styled.View`
  flex-direction: row;
  padding: 4px;
  justify-content: flex-start;
  align-items: center;
`;

export const EditModalItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const EditModalItemText = styled.Text`
  font-size: 16px;
`;
