import { Body, GlobalContainer, Subtitle, Title } from "assets/utils/global.style"
import { ClassCard } from "@src/components/card/class-card/class-card.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeBodyStyled, HomeHeaderStyled } from "./home.page.style";
import { FlatList, Image, Text, View } from "react-native";
import { ProfilePhoto } from "@src/components/profile/profile-photo.component";
import { RootStackParamsList } from "@src/navigation/Routes";
import { Theme } from "assets/theme/theme";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { LessonService } from "@src/data/service/lesson.service";
import EmptyState from "@freakycoder/react-native-empty-state";
import EmptyStateImage from '../../../assets/EmptyStateImage.png';
import ErrorStateImage from '../../../assets/ErrorStateImage.png';

//TODO: passar filtragem para o backend

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Home'>;
  route: RouteProp<RootStackParamsList, 'Home'>;
};

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [errorLesson, setErrorLesson] = useState<Error>();

  useEffect(() => {
    const getLessons = async () => {
      const lessonVector = await LessonService.listLessons();
      if (!(lessonVector instanceof Error)){
        const filteredArray = lessonVector.filter(lesson => isToday(lesson.startDatetime) && lesson.endDatetime > new Date())
        setLessons(filteredArray);
      } 
      else setErrorLesson(lessonVector);
    }
    getLessons();
  }, []);

  const handleProfileTap = () => {
    navigation.navigate('Profile');
  }

  const renderItem = ({ item }: { item: { subject: string, startDatetime: Date, endDatetime: Date, isAttendanceRegistrable: boolean } }) => {
    return (
      <View style={{ margin: Theme.Spacing.small }}>
        <ClassCard title={item.subject} time={item.startDatetime} activate={item.isAttendanceRegistrable} isNow={isNowBetween(item.startDatetime, item.endDatetime)}/>
      </View>
    )
  }

  const today = new Date();
  const formattedToday = format(today, "d 'de' MMMM", { locale: ptBR })

  const isNowBetween = (start: Date, end: Date): boolean => {
    return today >= start && today <= end;
  };

  const isToday = (date: Date): boolean => {
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };

  return (
    <GlobalContainer>
      <SafeAreaView />
      <View>
        <HomeHeaderStyled>
          <Image source={ require('../../../assets/LogoCPofc.png')}/>
          <ProfilePhoto onPress={handleProfileTap}/>
        </HomeHeaderStyled>
        <View style={{  marginLeft: Theme.Spacing.medium, padding: Theme.Spacing.small }}>
          <Title>{'Olá, Fulano'}</Title>
          <Subtitle>{'Aulas de hoje'}</Subtitle>
          <Body>{formattedToday}</Body>
        </View>
      </View>
      <HomeBodyStyled>
        {lessons.length > 0 ? <FlatList 
          data={lessons.filter(lesson => isToday(lesson.startDatetime) && lesson.endDatetime > new Date())}
          renderItem={renderItem}
        /> : 
          <EmptyState 
            title={errorLesson ? "Erro!" : "Sem aulas encontradas"} 
            description={errorLesson ? "Não foi possivel encontrar suas aulas, tente novamente mais tarde." : "Parece que você não tem aulas hoje."} 
            imageSource={errorLesson ? ErrorStateImage : EmptyStateImage} 
            imageStyle={{ marginTop: 120, width: 120, height: 120 }}
          />
        }
      </HomeBodyStyled>
    </GlobalContainer>
  );
}
