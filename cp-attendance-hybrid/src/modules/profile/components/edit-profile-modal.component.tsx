import { EditProfileModalBodyStyle, ModalContent, ModalHeader, ModalTitle, Overlay } from "./edit-profile-modal.component.style";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  title: string;
}

export const EditProfileModal: React.FC<ModalProps> = props => {
  return (
    <EditProfileModalBodyStyle transparent={true} visible={props.visible} animationType="slide">
      <Overlay>
        <ModalHeader>
          <ModalTitle>{props.title}</ModalTitle>
        </ModalHeader>
        <ModalContent>
          {props.children}
        </ModalContent>
      </Overlay>
    </EditProfileModalBodyStyle>
  );
}
