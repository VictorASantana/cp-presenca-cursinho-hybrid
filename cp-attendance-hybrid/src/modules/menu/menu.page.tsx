import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuAreaViewStyled, MenuButtonAreaStyled, MenuHeaderInfoStyled, MenuHeaderPersonalStyled, MenuHeaderStyled, MenuHeaderText, MenuHeaderTitle } from './menu.page.style';
import { ButtonCard } from '@src/components/button-card/button-card.component';
import { ProfilePhoto } from '@src/components/profile/profile-photo.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamsList } from '@src/navigation/Routes';

type MenuScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Menu'>;
  route: RouteProp<RootStackParamsList, 'Menu'>;
};

const Menu: React.FC<MenuScreenProps> = ({ navigation }) => {
  const handleProfileTap = () => {
    navigation.navigate('Profile');
  }

  return (
    <>
      <MenuHeaderStyled>
        <SafeAreaView />
        <MenuHeaderInfoStyled>
          <ProfilePhoto size={100} onPress={handleProfileTap} />
          <MenuHeaderPersonalStyled>
            <MenuHeaderTitle>{'Fulano da Silva'}</MenuHeaderTitle>
            <MenuHeaderText>{'ID 01'}</MenuHeaderText>
          </MenuHeaderPersonalStyled>
        </MenuHeaderInfoStyled>
      </MenuHeaderStyled>
      <MenuAreaViewStyled>
        <MenuButtonAreaStyled>
          <ButtonCard icon="person-outline" text="Meu Perfil" onTap={handleProfileTap} />
          <ButtonCard icon="analytics" text="Métricas e Benefícios" onTap={() => console.log('click')} />
        </MenuButtonAreaStyled>
      </MenuAreaViewStyled>
    </>
  );
};

export default Menu;
