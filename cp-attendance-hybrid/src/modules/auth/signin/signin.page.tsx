import { InputField } from "@src/components/input-field/input-field.component.style";
import React, { useState } from "react";
import { ButtonAreaStyled, ForgetPassword, LoginErrorMessage, SiginContainerStyled, SignBodyStyled, SigninLogoStyled, SigninTitle } from "./signin.page.style";
import { ActivityIndicator, Image } from "react-native";
import { ModalButton } from "@src/components/button/button-modal/modal-button.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@src/context/auth.context";
import { UserService } from "@src/data/service/user.service";
import { useUser } from "@src/context/user.context";
import { StudentService } from "@src/data/service/student.service";
import LogoCpOfc from "../../../../assets/LogoCPofc.png";

export const Signin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false); 
  const auth = useAuth();
  const user = useUser();

  const signIn = async () => {
    setLoading(true);
    setError(false);
    const response = await auth.signIn(email, password);
    if (response instanceof Error) {
      setLoading(false);
      setError(true);
    } else {
      const userInfo = await UserService.getUserInfo();
      if (!(userInfo instanceof Error)) {
        const student = await StudentService.getStudentInfo(userInfo.id);
        if (!(student instanceof Error)) {
          user.setUser({ username: userInfo.name, email: userInfo.email, id: student.id, studentClass: student.studentClass })
        }
      }
    }
  };
  
  return (
    <SiginContainerStyled>
      <SafeAreaView />
      <SigninLogoStyled>
        <Image source={LogoCpOfc}/>
      </SigninLogoStyled>
      <SignBodyStyled >
        <SigninTitle>{'Login'}</SigninTitle>
        <ButtonAreaStyled>
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
