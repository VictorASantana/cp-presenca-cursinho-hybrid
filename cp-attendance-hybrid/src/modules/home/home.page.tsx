import { Body, GlobalContainer, Subtitle, Title } from "assets/utils/global.style"
import { ClassCard } from "@src/components/card/class-card/class-card.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeBodyStyled, HomeEmptyStyled, HomeHeaderStyled } from "./home.page.style";
import { FlatList, Image, Text, View } from "react-native";
import { ProfilePhoto } from "@src/components/profile/profile-photo.component";
import { RootStackParamsList } from "@src/navigation/Routes";
import { Theme } from "assets/theme/theme";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { useEffect, useState } from "react";
import { LessonRepository } from "@src/data/repositories/lesson.repository";
import { UserRepository } from "@src/data/repositories/user.repository";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Home'>;
  route: RouteProp<RootStackParamsList, 'Home'>;
};

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getLessons = async () => {
      const lessonVector = await LessonRepository.listLessons();
      if (!(lessonVector instanceof Error)) setLessons(lessonVector);
    }
    const getUser = async () => {
      const userFetch = await UserRepository.getUser();
      if (!(userFetch instanceof Error)) setUser(userFetch);
    }
    getLessons();
    getUser();
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
          <Title>{'Olá, ' + user?.fullname.split(' ')[0]}</Title>
          <Subtitle>{'Aulas de hoje'}</Subtitle>
          <Body>{formattedToday}</Body>
        </View>
      </View>
      <HomeBodyStyled>
        {lessons ? <FlatList 
          data={lessons.filter(lesson => isToday(lesson.startDatetime) && lesson.endDatetime > new Date())}
          renderItem={renderItem}
        /> : 
          <HomeEmptyStyled>
            <Title>{'Sem aulas carregadas por hoje'}</Title>
          </HomeEmptyStyled>}
      </HomeBodyStyled>
    </GlobalContainer>
  );
}