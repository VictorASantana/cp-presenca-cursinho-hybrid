import React from "react";
import { Title } from "assets/utils/global.style";
import { GeneralMetricsMainText, GeneralMetricsStyled, GeneralMetricsText, GeneralMetricsTextArea, MetricsBodyStyled, MetricsHeaderStyled, MetricsStyled, SubjectMetrics, SubjectMetricsTextArea, SubjectMetricsTitle, TopAreaView } from "./metrics.page.style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Entypo';
import { Theme } from "assets/theme/theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "@src/navigation/Routes";
import { RouteProp } from "@react-navigation/native";
import { CircularProgress } from "@src/components/graphic/circular-graphic/circular-graphic.component";
import { ProgressBar } from "@src/components/graphic/bar-graph/bar-graph.component";
import { metricsMock, totalMetricsMock } from "@src/data/mock/metrics-mock";

type MetricsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Metrics'>;
  route: RouteProp<RootStackParamsList, 'Metrics'>;
};

export const Metrics: React.FC<MetricsScreenProps> = ({ navigation }) => {

  const handleBackTap = () => {
    navigation.pop();
  }

  return (
    <>
      <MetricsHeaderStyled>
      <SafeAreaView />
      <TopAreaView>
        <Icon name={'chevron-left'} color={Theme.Colors.darkGray} size={30} style={{ margin: 8 }} onPress={handleBackTap}/>
        <Title>{'Métricas'}</Title>
      </TopAreaView>
      </MetricsHeaderStyled>
        <MetricsBodyStyled>
        <GeneralMetricsStyled>
          <CircularProgress percentage={(totalMetricsMock.total - totalMetricsMock.absences)/totalMetricsMock.total * 100} />
          <GeneralMetricsTextArea>
            <GeneralMetricsMainText>{totalMetricsMock.total - totalMetricsMock.absences + ' aulas presente'}</GeneralMetricsMainText>
            <GeneralMetricsText>{totalMetricsMock.absences + ' aulas ausente'}</GeneralMetricsText>
          </GeneralMetricsTextArea>
        </GeneralMetricsStyled>
        <MetricsStyled>
          <SubjectMetrics>
            {metricsMock.map(metrics => (
              <><SubjectMetricsTextArea key={metrics.subject}>
                <SubjectMetricsTitle>{metrics.subject}</SubjectMetricsTitle>
                <SubjectMetricsTitle>{(metrics.percentage*100) + '%'}</SubjectMetricsTitle>
              </SubjectMetricsTextArea><ProgressBar progress={metrics.percentage*100} /></>
            ))  }
          </SubjectMetrics>
        </MetricsStyled>
      </MetricsBodyStyled>
    </>
  );
}
