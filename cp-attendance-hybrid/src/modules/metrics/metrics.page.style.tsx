import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

export const MetricsHeaderStyled = styled.View`
  background-color: ${Theme.Colors.white};
  flex: 0.15;
  justify-content: center;
  align-items: flex-start;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const TopAreaView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${Theme.Spacing.xxSmall}px;
`;

export const MetricsBodyStyled = styled.View`
  flex: 0.85;
  align-items: center;
  justify-content: space-between;
`;

export const GeneralMetricsStyled = styled.View`
  width: 90%;
  background-color: ${Theme.Colors.secondary};
  border-radius: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.medium}px;
  flex-direction: row;
  align-items: center;
`;

export const GeneralMetricsTextArea = styled.View`
  flex-direction: column;
`;

export const GeneralMetricsMainText = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Spacing.large}px;
  font-weight: bold;
  margin-left: ${Theme.Spacing.medium}px;
`;

export const GeneralMetricsText = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Spacing.medium}px;
  font-weight: lighter;
  margin-left: ${Theme.Spacing.medium * 1.2}px;
`;

export const MetricsStyled = styled.View`
  width: 90%;
  height: 75%;
  background-color: ${Theme.Colors.secondary};
  border-radius: ${Theme.Spacing.small}px;
  padding: ${Theme.Spacing.medium}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: ${Theme.Spacing.large}px;
`;

export const SubjectMetrics = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const SubjectMetricsTitle = styled.Text`
  color: ${Theme.Colors.white};
  font-size: ${Theme.Spacing.medium}px;
  font-weight: bold;
  margin-left: ${Theme.Spacing.small}px;
`;

export const SubjectMetricsTextArea = styled.View`
  width: 95%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${Theme.Spacing.small}px;
`
