import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAreaStyled, LoginErrorMessage, SiginContainerStyled, SignBodyStyled, SigninLogoStyled, SigninTitle } from "../signin/signin.page.style";
import { ActivityIndicator, Image } from "react-native";
import { ModalButton } from "@src/components/button/button-modal/modal-button.component";
import { InputField } from "@src/components/input-field/input-field.component.style";
import { useState } from "react";
import { PasswordResetService } from "@src/data/service/password-reset.service";
import SuccessStateImage from 'assets/SuccessStateImage.png';
import { EditProfileModal } from '@src/modules/profile/components/edit-profile-modal.component';
import EmptyState from '@freakycoder/react-native-empty-state';
import LogoCpOfc from '../../../../assets/LogoCPofc.png';
import Icon from 'react-native-vector-icons/Entypo';
import { Theme } from 'assets/theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '@src/navigation/Routes';
import { RouteProp } from '@react-navigation/native';
import { Title } from 'assets/utils/global.style';
import { Description, TopAreaView } from '../send-email/send-email.page.style';

type ResetPasswordScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'PasswordReset'>;
  route: RouteProp<RootStackParamsList, 'PasswordReset'>;
};

export const PasswordReset: React.FC<ResetPasswordScreenProps> = ({ navigation, route }) => {
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const { token } = route.params;

  const handleBackTap = () => {
    navigation.pop();
  }
  const handleResetPassword = async () => {
    setLoading(true);
    setError('');
    if (password !== confirmPassword) {
      setError('Senhas não devem divergir.');
    } else {
      if (password) {
        const response = await PasswordResetService.resetPassword(password, token);
        if (!(response instanceof Error)) {
          setSuccessModal(true);
        } else {
          setError(response.message);
        }
      }
    }
    setLoading(false);
  }

  return (
    <SiginContainerStyled>
      <SafeAreaView />
      <TopAreaView>
        <Icon name={'chevron-left'} color={Theme.Colors.darkGray} size={30} style={{ margin: 6 }} onPress={handleBackTap}/>
        <Title>{'Voltar'}</Title>
      </TopAreaView>
      <SigninLogoStyled>
        <Image source={LogoCpOfc}/>
      </SigninLogoStyled>
      <SignBodyStyled >
        <SigninTitle>{'Cadastrar nova senha'}</SigninTitle>
        <ButtonAreaStyled>
          {!!error && <LoginErrorMessage>{error}</LoginErrorMessage>}
          <Description>{"Insira sua nova senha."}</Description>
          <InputField placeholder="Senha" value={password} onChangeText={setPassword}/>
          <InputField placeholder="Confirmar Senha" value={confirmPassword} onChangeText={setConfirmPassword}/>
          {loading ? <ActivityIndicator /> : <ModalButton text={"Confirmar"} width={300} onTap={handleResetPassword}/>}
        </ButtonAreaStyled>
      </SignBodyStyled>
      {successModal && <EditProfileModal visible={successModal} title={'Sucesso'}>
        <EmptyState title={'Nova senha definida com sucesso!'} imageSource={SuccessStateImage} imageStyle={{ marginTop: 10, width: 40, height: 40 }} description={''} />
        <ModalButton text={'Sair'} outline onTap={() => { setSuccessModal(false) }}/>
      </EditProfileModal>}
    </SiginContainerStyled>
  );
}
