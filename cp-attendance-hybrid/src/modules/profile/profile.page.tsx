import React from "react";
import { EditModalItem, EditModalItemText, EditModalItemTitle, ProfileAreaViewStyled, ProfileButtonAreaStyled, ProfileHeaderStyled, ProfileHeaderText, ProfileHeaderTitle } from "./profile.page.style";
import { ProfilePhoto } from "@src/components/profile/profile-photo.component";
import { ButtonCard } from "@src/components/button-card/button-card.component";
import { Theme } from "assets/theme/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { EditProfileModal } from "./components/edit-profile-modal.component";
import Divider from "@src/components/divider/divider.component";
import { ModalButton } from "@src/components/button/button-modal/base-button.component";

export const Profile: React.FC = () => {
  const [editProfileVisible, setEditProfileVisible] = React.useState(false);

  const handleEditProfileTap = () => {
    setEditProfileVisible(true);
  }

  return (
    <>
      <ProfileHeaderStyled>
        <SafeAreaView />
        <ProfilePhoto size={120}/>
        <ProfileHeaderTitle>{'Fulano da Silva'}</ProfileHeaderTitle>
        <ProfileHeaderText>{'ID 01'}</ProfileHeaderText>
      </ProfileHeaderStyled>
      <ProfileAreaViewStyled>
        <ProfileButtonAreaStyled>
          <ButtonCard icon="lock-closed-outline" text="Alterar Senha" onTap={() => console.log('click')} />
          <ButtonCard icon="notifications-outline" text="Notificações" onTap={() => console.log('click')} />
          <ButtonCard icon="person-outline" text="Meus Dados" onTap={handleEditProfileTap} />
          <ButtonCard icon="log-out-outline" text="Sair" onTap={() => console.log('click')} color={Theme.Colors.secondary} />
        </ProfileButtonAreaStyled>
      </ProfileAreaViewStyled>
      <EditProfileModal visible={editProfileVisible} title="Meus Dados">
        <EditModalItem>
          <EditModalItemTitle>{'Nome: '}</EditModalItemTitle>
          <EditModalItemText>{'Fulano da Silva Sauro'}</EditModalItemText>
          <Divider color={Theme.Colors.darkGray}/>
        </EditModalItem>
        <EditModalItem>
          <EditModalItemTitle>{'Telefone: '}</EditModalItemTitle>
          <EditModalItemText>{'(99)99999-9999'}</EditModalItemText>
          <Divider color={Theme.Colors.darkGray}/>
        </EditModalItem>
        <EditModalItem>
          <EditModalItemTitle>{'Email: '}</EditModalItemTitle>
          <EditModalItemText>{'fulanosilva@email.com'}</EditModalItemText>
          <Divider color={Theme.Colors.darkGray}/>
        </EditModalItem>
        <ModalButton text="Editar"/>
        <ModalButton text="Cancelar" outline onTap={() => setEditProfileVisible(false)}/>
      </EditProfileModal>
    </>
    
  )
};
