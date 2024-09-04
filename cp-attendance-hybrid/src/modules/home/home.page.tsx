import { Body, GlobalContainer, Subtitle, Title } from "assets/utils/global.style"
import { ClassCard } from "@src/components/card/class-card/class-card.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeBodyStyled, HomeHeaderStyled } from "./home.page.style";
import { FlatList, Image, View } from "react-native";
import { ProfilePhoto } from "@src/components/profile/profile-photo.component";
import { ScreenProps } from "@src/navigation/Routes";
import TodayClasses from '../../data/mock/class-mock';
import { Theme } from "assets/theme/theme";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const Home: React.FC<ScreenProps<'Home'>> = ({ navigation }) => {
  const handleProfileTap = () => {
    navigation.navigate('Profile');
  }

  const renderItem = ({ item }: { item: { subject: string, dateTime: Date } }) => {
    return (
      <View style={{ margin: Theme.Spacing.small }}>
        <ClassCard title={item.subject} activate={false} />
      </View>
      
    )
  }

  const today = new Date();
  const formattedToday = format(today, "d 'de' MMMM", { locale: ptBR })

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
        <FlatList 
          data={TodayClasses}
          renderItem={renderItem}
        />
      </HomeBodyStyled>
    </GlobalContainer>
  );
}