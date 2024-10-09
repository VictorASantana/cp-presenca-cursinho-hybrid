import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuAreaViewStyled, MenuButtonAreaStyled, MenuHeaderInfoStyled, MenuHeaderPersonalStyled, MenuHeaderStyled, MenuHeaderText, MenuHeaderTitle } from './menu.page.style';
import { ButtonCard } from '@src/components/button-card/button-card.component';
import { ProfilePhoto } from '@src/components/profile/profile-photo.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '@src/navigation/Routes';
import { useUser } from '@src/context/user.context';
import { TopAreaView } from '../metrics/metrics.page.style';
import { Theme } from 'assets/theme/theme';
import { Title } from 'assets/utils/global.style';

type MenuScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Menu'>;
  route: RouteProp<RootStackParamsList, 'Menu'>;
};

const Menu: React.FC<MenuScreenProps> = ({ navigation }) => {
  const user = useUser();
  const handleProfileTap = () => {
    navigation.navigate('Profile');
  }

  const handleMetricsTap = () => {
    navigation.navigate('Metrics');
  }

  const handleScheduleTap = () => {
    navigation.navigate('Schedule');
  }

  return (
    <>
      <MenuHeaderStyled>
        <SafeAreaView />
        <MenuHeaderInfoStyled>
          <ProfilePhoto size={100} onPress={handleProfileTap} />
          <MenuHeaderPersonalStyled>
            <MenuHeaderTitle>{user.user?.username}</MenuHeaderTitle>
            <MenuHeaderText>{'ID ' + (user.user?.id ?? '01')}</MenuHeaderText>
          </MenuHeaderPersonalStyled>
        </MenuHeaderInfoStyled>
      </MenuHeaderStyled>
      <MenuAreaViewStyled>
        <MenuButtonAreaStyled>
          <ButtonCard icon="person-outline" text="Meu Perfil" onTap={handleProfileTap} />
          <ButtonCard icon="trending-up" text="Métricas" onTap={handleMetricsTap} />
          <ButtonCard icon="calendar" text="Grade Horária" onTap={handleScheduleTap} />
        </MenuButtonAreaStyled>
      </MenuAreaViewStyled>
    </>
  );
};

export default Menu;
