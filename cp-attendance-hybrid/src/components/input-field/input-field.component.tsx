import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";



export const InputFieldStyled = styled.TextInput<{ isFocused: boolean }>`
  background-color: ${Theme.Colors.white};
  border: 1px solid ${({ isFocused }) => isFocused ? Theme.Colors.secondary : Theme.Colors.gray};
  border-radius: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.small}px;
  margin: 10px 0;
  width: 300px;
`;
