import React, { useCallback, useEffect, useState } from "react";
import { Cell, HeaderCell, HeaderRow, HeaderTextStyled  } from "./schedule.page.style";
import { ScheduleItem } from "@src/data/types/schedule-item.type";
import { ScheduleCard } from "@src/components/card/schedule-card/schedule-card.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Title } from "assets/utils/global.style";
import { Theme } from "assets/theme/theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "@src/navigation/Routes";
import { RouteProp } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Entypo';
import { useUser } from "@src/context/user.context";
import { SubjectService } from "@src/data/service/subject.service";
import { Subject } from "@src/data/types/subjects/subject.type";
import { ScheduleMapper } from "@src/data/mapper/schedule.mapper";
import EmptyState from "@freakycoder/react-native-empty-state";
import EmptyStateImage from '../../../assets/EmptyStateImage.png';


const generateHourlyRange = (startDateTime: Date, endDateTime: Date): string[] => {
  const result: string[] = [];
  let currentDateTime = new Date(startDateTime);
  const finalTime = new Date(endDateTime);

  while (currentDateTime <= finalTime) {
    result.push(
      currentDateTime.toLocaleTimeString("pt-BR", { hour: '2-digit', minute: '2-digit' })
    );
    currentDateTime.setHours(currentDateTime.getHours() + 1);
  }
  return result;
}

const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];

type ScheduleScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Schedule'>;
  route: RouteProp<RootStackParamsList, 'Schedule'>;
};

export const Schedule: React.FC<ScheduleScreenProps> = ({ navigation }) => {
  const [error, setError] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const user = useUser();
  const hours = !!user.user ? generateHourlyRange(user.user?.startTime, user.user?.endTime) : [];

  const getSubjects = useCallback(async () => {
    setLoading(true);
    const subjectVector = await SubjectService.getSubjects(String(user.user?.studentClass));
    if (!(subjectVector instanceof Error)) {
      if (subjectVector.length > 0) {
        setSubjects(subjectVector);
      }
      setError(false);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    getSubjects();
  }, [getSubjects]);

  useEffect(() => {
    setScheduleItems(subjects.flatMap(subject => ScheduleMapper(subject)));
  }, [subjects]);

  const handleBackTap = () => {
    navigation.pop();
  };

  const handleRefresh = async () => {
    setLoading(true);
    setRefreshing(true);
    await getSubjects();
    setLoading(false);
    setRefreshing(false);
  }

  const renderHeader = () => (
    <HeaderRow>
      {days.map((day, index) => (
        <HeaderCell key={index}>
          <HeaderTextStyled>{day}</HeaderTextStyled>
        </HeaderCell>
        ))
      }
    </HeaderRow>
  );

  const renderRow = (time: string) => (
    <View style={{ flexDirection: 'row' }}>
      {days.map((day) => {
        const item = scheduleItems.find((s) => s.weekDay.slice(0, 3) === day && s.startTime.split(':')[0] === time.split(':')[0]);
        return (
          item ? 
            <Cell>
              <ScheduleCard 
                startTime={item.startTime}
                endTime={item.endTime}
                subject={item.subject}
                name={item.name} 
                cardHeight={100} 
                cardTop={10}              
              /> 
            </Cell> : 
            <Cell>
              <HeaderTextStyled>{'-'}</HeaderTextStyled>
            </Cell>
        );
      })}
    </View>
  )


  return (
    <>
      <SafeAreaView />
      <View style={{ marginLeft: 8, flexDirection: 'row' }}>
        <Icon
          name={'chevron-left'}
          color={Theme.Colors.darkGray}
          size={30}
          style={{ marginRight: 8, marginTop: 20 }}
          onPress={handleBackTap}
        />
        <Title>{'Grade Horária'}</Title>
      </View>
      {loading ? 
          <View style={{ marginTop: 200 }}>
            <ActivityIndicator size={70} style={{ alignSelf: "center" }} color={Theme.Colors.secondary}/>
          </View> :
        scheduleItems.length > 0 ? (
          <FlatList
            data={hours}
            ListHeaderComponent={renderHeader} 
            renderItem={({ item }) => renderRow(item)}
          />
        ) : (
          error ? 
          <EmptyState
            title={'Erro!'}
            description={'Não foi possível carregar sua grade horária.'}
            imageSource={EmptyStateImage}
            enableButton
            buttonStyle={{ backgroundColor: Theme.Colors.primary, padding: 10, borderRadius: 8 }}
            buttonText="Tentar novamente?"
            onPress={handleRefresh}
          /> :
          <EmptyState
            title={'Ops!'}
            description={'Você ainda não tem aulas cadastradas.'}
            imageSource={EmptyStateImage}
            enableButton
            buttonStyle={{ backgroundColor: Theme.Colors.primary, padding: 10, borderRadius: 8 }}
            buttonText="Tentar novamente?"
            onPress={handleRefresh}
          />
        )}
    </>
  );
};
