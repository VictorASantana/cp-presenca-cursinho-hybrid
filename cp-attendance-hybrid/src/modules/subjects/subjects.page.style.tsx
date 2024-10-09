import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const SubjectsHeader = styled.View`
  flex: 0.1;
  padding: ${Theme.Spacing.medium}px;
`;

export const SubjectsBody = styled.View`
  flex: 0.9;
  width: 95%;
  background-color: ${Theme.Colors.white};
  margin-bottom: 120px;
  border-radius: ${Theme.Spacing.small}px;
  align-self: center;
`; 

export const SubjectsContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: ${Theme.Spacing.small}px;
`;
