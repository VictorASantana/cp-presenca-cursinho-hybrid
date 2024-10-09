import { InputField } from "@src/components/input-field/input-field.component.style";
import React, { useEffect, useState } from "react";
import { ButtonAreaStyled, ForgetPassword, LoginErrorMessage, SiginContainerStyled, SignBodyStyled, SigninLogoStyled, SigninTitle } from "./signin.page.style";
import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { ModalButton } from "@src/components/button/button-modal/modal-button.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@src/context/auth.context";

export const Signin: React.FC = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 
  const auth = useAuth();

  const signIn = async () => {
    setLoading(true);
    setError(false);
    const response = await auth.signIn(email, password);
    if (response instanceof Error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  
  return (
    <SiginContainerStyled>
      <SafeAreaView />
      <SigninLogoStyled>
        <Image source={ require('../../../assets/LogoCPofc.png')}/>
      </SigninLogoStyled>
      <SignBodyStyled isKeyboardVisible={isKeyboardVisible}>
        <SigninTitle>{'Login'}</SigninTitle>
        <ButtonAreaStyled isKeyboardVisible={isKeyboardVisible}>
          {error && <LoginErrorMessage>{'Não foi possível realizar o Login'}</LoginErrorMessage>}
          <InputField placeholder="Email" value={email} onChangeText={setEmail}/>
          <InputField placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword}/>
          {loading ? <ActivityIndicator /> : <ModalButton text={"Entrar"} width={300} onTap={signIn}/>}
          <ForgetPassword>{'Esqueceu a senha?'}</ForgetPassword>
        </ButtonAreaStyled>
      </SignBodyStyled>
    </SiginContainerStyled>
  );
}
