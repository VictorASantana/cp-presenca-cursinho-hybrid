import { InputField } from "@src/components/input-field/input-field.component.style";
import { Title } from "assets/utils/global.style";
import React from "react";
import { ButtonAreaStyled, SiginContainerStyled, SignBodyStyled, SigninTitle } from "./signin.page.style";
import { KeyboardAvoidingView, Platform } from "react-native";

export const Signin: React.FC = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      <SiginContainerStyled>
        <SignBodyStyled>
          <SigninTitle>{'Login'}</SigninTitle>
          <ButtonAreaStyled>
            <InputField />
            <InputField />
          </ButtonAreaStyled>
        </SignBodyStyled>
      </SiginContainerStyled>
    </KeyboardAvoidingView>
  );
}
