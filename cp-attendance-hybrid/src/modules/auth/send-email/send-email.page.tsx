import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonAreaStyled, LoginErrorMessage, SiginContainerStyled, SignBodyStyled, SigninLogoStyled, SigninTitle } from "../signin/signin.page.style";
import { ActivityIndicator, Image } from "react-native";
import { ModalButton } from "@src/components/button/button-modal/modal-button.component";
import { InputField } from "@src/components/input-field/input-field.component.style";
import { useState } from "react";
import { PasswordResetService } from "@src/data/service/password-reset.service";
import EmptyStateImage from '../../../../assets/EmptyStateImage.png';
import EmptyState from '@freakycoder/react-native-empty-state';
import LogoCpOfc from '../../../../assets/LogoCPofc.png';
import Icon from 'react-native-vector-icons/Entypo';
import { Theme } from 'assets/theme/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '@src/navigation/Routes';
import { RouteProp } from '@react-navigation/native';
import { Description, TopAreaView } from './send-email.page.style';
import { Title } from 'assets/utils/global.style';

type SendEmailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamsList, 'SendEmail'>;
  route: RouteProp<RootStackParamsList, 'SendEmail'>;
};

export const SendEmail: React.FC<SendEmailScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleBackTap = () => {
    navigation.pop();
  }

  const handleSendEmail = async () => {
    setLoading(true);
    setError('');
    if (email) {
      const response = await PasswordResetService.sendEmail(email);
      if (!(response instanceof Error)) {
        setEmailSent(true);
      } else {
        setError(response.message);
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
        {emailSent ?
          <EmptyState title={"Email enviado"} description={"Confira sua caixa de entrada e spam."} imageSource={EmptyStateImage} />
        : 
        <ButtonAreaStyled>
        {!!error && <LoginErrorMessage>{error}</LoginErrorMessage>}
        <Description>{"Insira seu email para definir nova senha."}</Description>
        <InputField placeholder="Email" value={email} onChangeText={setEmail}/>
        {loading ? <ActivityIndicator /> : <ModalButton text={"Confirmar"} width={300} onTap={handleSendEmail}/>}
      </ButtonAreaStyled>}
      </SignBodyStyled>
    </SiginContainerStyled>
  );
}