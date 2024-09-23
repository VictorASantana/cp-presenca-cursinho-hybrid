import { InputField } from "@src/components/input-field/input-field.component.style";
import React, { useEffect, useState } from "react";
import { ButtonAreaStyled, ForgetPassword, SiginContainerStyled, SignBodyStyled, SigninLogoStyled, SigninTitle } from "./signin.page.style";
import { Image, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { ModalButton } from "@src/components/button/button-modal/modal-button.component";
import { SafeAreaView } from "react-native-safe-area-context";

export const Signin: React.FC = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

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
          <InputField placeholder="Email"/>
          <InputField placeholder="Senha" secureTextEntry/>
          <ModalButton text={"Entrar"} width={300} />
          <ForgetPassword>{'Esqueceu a senha?'}</ForgetPassword>
        </ButtonAreaStyled>
      </SignBodyStyled>
    </SiginContainerStyled>
  );
}
