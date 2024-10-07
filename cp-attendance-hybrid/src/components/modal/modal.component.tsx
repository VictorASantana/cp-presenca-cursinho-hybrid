import React, { useState } from 'react';
import { KeyboardAvoidingView, Modal, Platform } from 'react-native';
import { ButtonArea, ModalBackground, ModalContainer, ModalText } from './modal.component.style';

import { ModalButton } from '../button/button-modal/modal-button.component';
import { InputField } from '../input-field/input-field.component.style';

interface ModalProps {
  visible: boolean,
  text: string;
  close: () => void,
}

export const CustomModal = (props: ModalProps) => {
  const [content, setContent] = useState('');

  const sendPassKey = () => {

  }

  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.close}
    >
      <ModalBackground>
        <ModalContainer>
          <ModalText>{props.text}</ModalText>
          <ButtonArea>
            <InputField placeholder={'Palavra chave'} value={content} onChangeText={setContent}/>
            <ModalButton text={'Confirmar'} onTap={sendPassKey}/>
            <ModalButton text={'Cancelar'} outline onTap={props.close}/>
          </ButtonArea>
        </ModalContainer>
      </ModalBackground>
    </Modal>
  )
}