import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const SubjectModalHeader = styled.View<{ color: string }>`
  background-color: ${props => props.color};
  position: absolute;
  height: 50px;
  padding: ${Theme.Spacing.small}px;
  border-top-right-radius: ${Theme.Spacing.small}px;
  border-top-left-radius: ${Theme.Spacing.small}px;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`;

export const SubjectModalTitle = styled.Text`
  color: ${Theme.Colors.white};
  font-size: 24px;
  font-weight: bold;
`;

// Componente para o fundo do Modal
export const SubjectModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Componente para o conteúdo do Modal
export const SubjectModalContainer = styled.View`
  flex: 0.5;
  width: 90%;
  background-color: ${Theme.Colors.white};
  border-radius: ${Theme.Spacing.medium}px;
  padding: ${Theme.Spacing.medium}px;
  align-items: center;
  justify-content: center;
`;

// Texto dentro do Modal
export const SubjectModalText = styled.Text`
  color: ${Theme.Colors.darkGray};
  font-size: 18px;
  margin: 20px;
`;


export const ButtonArea = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
