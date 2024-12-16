import React from "react";
import { EditModalItem, EditModalItemText, EditModalItemTitle, ProfileAreaViewStyled, ProfileButtonAreaStyled, ProfileHeaderStyled, ProfileHeaderText, ProfileHeaderTitle, TopAreaView } from "./profile.page.style";
import { ProfilePhoto } from "@src/components/profile/profile-photo.component";
import { ButtonCard } from "@src/components/button-card/button-card.component";
import { Theme } from "assets/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { EditProfileModal } from "./components/edit-profile-modal.component";
import { ModalButton } from "@src/components/button/button-modal/modal-button.component";
import { useAuth } from "@src/context/auth.context";
import { useUser } from "@src/context/user.context";
import Icon from 'react-native-vector-icons/Entypo';
import { Title } from "assets/utils/global.style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamsList } from "@src/navigation/Routes";
import { RouteProp } from "@react-navigation/native";
import ImagePicker from 'react-native-image-picker';
import { ActivityIndicator, PermissionsAndroid, Platform, TouchableOpacity, View } from "react-native";
import { UserPhoto } from "@src/data/types/user/user.type";
import { UserService } from "@src/data/service/user.service";

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'Profile'>;
  route: RouteProp<RootStackParamsList, 'Profile'>;
};

export const Profile: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [editProfileVisible, setEditProfileVisible] = React.useState(false);
  const [editPhotoVisible, setEditPhotoVisible] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState<UserPhoto | null>();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const auth = useAuth();
  const user = useUser();

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Acesso à câmera",
          message: "O aplicativo deseja acessar a câmera do seu dispositivo.",
          buttonNeutral: "Pergunte mais tarde",
          buttonNegative: "Cancelar",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  const handleEditProfileTap = () => {
    setEditProfileVisible(true);
  }

  const handlePasswordResetTap = () => {
    navigation.navigate('SendEmail');
  }

  const handleLogoutTap = () => {
    auth.signOut();  
  }

  const handleBackTap = () => {
    navigation.pop();
  }

  const uploadProfilePhoto = async () => {
    setLoading(true);
    if (profileImage && user.user?.id) {
      const response = await UserService.uploadProfilePhoto(profileImage, Number(user.user.id));
      if (!(response instanceof Error)) {
        user.setUser({ ...user.user, profilePhoto: profileImage.uri})
        setEditPhotoVisible(false);
        setProfileImage(null);
      } else {
        setError(response.message);
      }
    } 
    setLoading(false);
  };

  const closeEditProfilePhotoModal = () => {
    setEditPhotoVisible(false);
    setProfileImage(null);
    setError('');
  }

  const handleGalleryTap = () => {
    ImagePicker.launchImageLibrary({ mediaType: 'photo' }, (result) => {
      setProfileImage({
        uri: result.uri,
        type: result.type!,
        name: result.fileName || `image_${Date.now()}.jpg`
      });
    });
  }

  const handleCameraTap = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      console.log('Camera permission denied');
      return;
    }
    ImagePicker.launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
      quality: 1
    }, (result) => {
      setProfileImage({
        uri: result.uri,
        type: result.type!,
        name: result.fileName || `image_${Date.now()}.jpg`
      });
    })

  }

  return (
    <>
      <ProfileHeaderStyled>
        <TopAreaView>
          <Icon name={'chevron-left'} color={Theme.Colors.darkGray} size={30} style={{ margin: 8 }} onPress={handleBackTap}/>
          <Title>{'Perfil'}</Title>
        </TopAreaView>
        <SafeAreaView />
        <ProfilePhoto size={120} onPress={() => setEditPhotoVisible(true)}/>
        <ProfileHeaderTitle>{user.user?.username}</ProfileHeaderTitle>
        <ProfileHeaderText>{'ID ' + user.user?.id}</ProfileHeaderText>
      </ProfileHeaderStyled>
      <ProfileAreaViewStyled>
        <ProfileButtonAreaStyled>
          <ButtonCard icon="lock-closed-outline" text="Alterar Senha" onTap={handlePasswordResetTap} />
          {/* <ButtonCard icon="notifications-outline" text="Notificações" onTap={() => console.log('click')} /> */}
          <ButtonCard icon="person-outline" text="Meus Dados" onTap={handleEditProfileTap} />
          <ButtonCard icon="log-out-outline" text="Sair" onTap={handleLogoutTap} color={Theme.Colors.secondary} />
        </ProfileButtonAreaStyled>
      </ProfileAreaViewStyled>
      <EditProfileModal visible={editProfileVisible} title="Meus Dados">
        <EditModalItem>
          <EditModalItemTitle>{'Nome: '}</EditModalItemTitle>
          <EditModalItemText>{user.user?.username}</EditModalItemText>
        </EditModalItem>
        <EditModalItem>
          <EditModalItemTitle>{'Email: '}</EditModalItemTitle>
          <EditModalItemText>{user.user?.email}</EditModalItemText>
        </EditModalItem>
        {/* <ModalButton text="Editar" /> */}
        <ModalButton text="Cancelar" outline onTap={() => setEditProfileVisible(false)}/>
      </EditProfileModal>
      <EditProfileModal visible={editPhotoVisible} title="Editar Foto">
        {error && <EditModalItemText>{error}</EditModalItemText>}
        {loading ? 
          <ActivityIndicator /> :
          profileImage ? 
            <View>
              <EditModalItemText>{'Imagem carregada: ' + profileImage.name}</EditModalItemText>
              <ModalButton text="Enviar" onTap={uploadProfilePhoto}/>
              <ModalButton text="Cancelar" outline onTap={() => setProfileImage(null)}/>
            </View>
            :
            <View>
              <ModalButton text="Abrir câmera" onTap={handleCameraTap}/>
              <ModalButton text="Abrir galeria" onTap={handleGalleryTap}/>
              <ModalButton text="Cancelar" outline onTap={closeEditProfilePhotoModal}/>
            </View>
        }
      </EditProfileModal>
    </>
    
  )
};
