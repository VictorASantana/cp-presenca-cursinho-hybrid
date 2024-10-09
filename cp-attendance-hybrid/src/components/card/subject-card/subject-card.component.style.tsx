import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

interface SubjectCardProps {
  color: string;
}

export const SubjectCardBody = styled.TouchableOpacity<SubjectCardProps>`
  background-color: ${props => props.color};
  width: 90%;
  height: 80px;
  margin-top: ${Theme.Spacing.small}px;
  border-radius: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.small}px;
`;

export const SubjectCardTitle = styled.Text`
  color: ${Theme.Colors.white};
  font-size: 16px;
  font-weight: bold;
  margin: 4px;
`;

export const SubjectCardText = styled.Text`
  color: ${Theme.Colors.white};
  font-size: 16px;
  margin: 4px;
`;
