import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const EditProfileModalBodyStyle = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const EditProfileModalHeaderStyle = styled.View`
  background-color: ${Theme.Colors.secondary};
`

export const ModalHeader = styled.View`
  background-color: ${Theme.Colors.secondary};
  width: 80%;
  padding: 16px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: ${Theme.Colors.white};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 20px;
  flex: 0.45;
  justify-content: space-around;
`;

export const ModalTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${Theme.Colors.white};
`;
