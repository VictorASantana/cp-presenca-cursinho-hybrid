import { Theme } from 'assets/theme/theme';
import styled from 'styled-components/native';

// Componente para o fundo do Modal
export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

// Componente para o conteúdo do Modal
export const ModalContainer = styled.View`
  width: 80%;
  background-color: ${Theme.Colors.white};
  border-radius: ${Theme.Spacing.medium}px;
  padding: ${Theme.Spacing.medium}px;
  align-items: center;
`;

// Texto dentro do Modal
export const ModalText = styled.Text`
  color: ${Theme.Colors.darkGray};
  font-size: 18px;
  margin-bottom: 20px;
`;


export const ButtonArea = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
