import React, { useEffect, useState } from "react";
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
import { MetricsService } from "@src/data/service/metrics.service";
import { AttendanceInfo, MetricsItem } from "@src/data/types/metrics/metrics-item.type";
import EmptyState from "@freakycoder/react-native-empty-state";
import EmptyStateImage from '../../../assets/EmptyStateImage.png';
import { mapSubject } from "assets/utils/utils";
import { useUser } from "@src/context/user.context";

type MetricsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Metrics'>;
  route: RouteProp<RootStackParamsList, 'Metrics'>;
};

export const Metrics: React.FC<MetricsScreenProps> = ({ navigation }) => {
  const [subjectsStatus, setSubjectsStatus] = useState<AttendanceInfo[]>([]);
  const [total, setTotal] = useState(0);
  const [absences, setAbsences] = useState(0);
  const user = useUser();
  function transformData(data: MetricsItem[]): AttendanceInfo[] {
    const resultMap: { [subject: string]: AttendanceInfo} = {};
    let totalAbsences = 0;
    for (const item of data) {
      const { subject, status } = item;
      if (!resultMap[subject]) {
          resultMap[subject] = { subject, total: 0, absences: 0 };
      }

      resultMap[subject].total += 1;
      if (status === "A") {
          resultMap[subject].absences += 1;
          totalAbsences += 1;
      }
    }
    setAbsences(totalAbsences);
    return Object.values(resultMap);
}

  const handleBackTap = () => {
    navigation.pop();
  }

  useEffect(() => {
    const getAttendances = async () => {
      const attendances = await MetricsService.listAttendances(Number(user.user?.id));
      if (!(attendances instanceof Error)) {
        const subjectsMetrics = transformData(attendances);
        setSubjectsStatus(subjectsMetrics);
        setTotal(attendances.length);
      }
    }
    getAttendances();
  }, []);


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
          <CircularProgress percentage={total > 0 ? Number(((total - absences)/total * 100).toFixed(2)) : 0} />
          <GeneralMetricsTextArea>
            <GeneralMetricsMainText>{total - absences + ' aulas presente'}</GeneralMetricsMainText>
            <GeneralMetricsText>{absences + ' aulas ausente'}</GeneralMetricsText>
          </GeneralMetricsTextArea>
        </GeneralMetricsStyled>
        {subjectsStatus.length > 0 ? 
          <MetricsStyled>
          <SubjectMetrics>
            {subjectsStatus.map(metrics => (
              <><SubjectMetricsTextArea key={metrics.subject}>
                <SubjectMetricsTitle>{mapSubject(metrics.subject)}</SubjectMetricsTitle>
                <SubjectMetricsTitle>{Number((((metrics.total - metrics.absences)/metrics.total)*100).toFixed(2)) + '%'}</SubjectMetricsTitle>
              </SubjectMetricsTextArea><ProgressBar progress={(((metrics.total - metrics.absences)/metrics.total)*100)} /></>
            ))}
          </SubjectMetrics> 
        </MetricsStyled> :
          <EmptyState 
          title={"Ops!"} 
          description={"Parece que você ainda não tem informações sobre suas aulas"} 
          imageSource={EmptyStateImage} 
          style={{marginBottom: 140, backgroundColor: Theme.Colors.white, borderRadius: 8}}
        />
        }
      </MetricsBodyStyled>
    </>
  );
}
