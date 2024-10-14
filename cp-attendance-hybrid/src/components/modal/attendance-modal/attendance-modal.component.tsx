import React, { useState } from 'react';
import { Modal } from 'react-native';
import { ButtonArea, ModalBackground, ModalContainer, ModalText } from './attendance-modal.component.style';

import { ModalButton } from '../../button/button-modal/modal-button.component';
import { InputField } from '../../input-field/input-field.component.style';
import { AttendanceService } from '@src/data/service/attendance.service';
import EmptyState from '@freakycoder/react-native-empty-state';
import SuccessStateImage from 'assets/SuccessStateImage.png';
import ErrorStateImage from 'assets/ErrorStateImage.png';


interface ModalProps {
  visible: boolean,
  text: string,
  close: () => void,
  lessonId: string,
  studentId: string,
}

export const CustomModal = (props: ModalProps) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendPassKey = async () => {
    const response = await AttendanceService.checkPasskey(content, props.lessonId, props.studentId);
    if (response instanceof Error) {
      setError(true);
    } else {
      setSuccess(true);
    }
  }

  const retry = () => {
    setError(false);
  }

  const close = () => {
    setError(false);
    setSuccess(false);
    props.close();
  } 
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.close}
    >
      <ModalBackground>
        <ModalContainer>
          {(!success && !error) && 
          <>
            <ModalText>{props.text}</ModalText>
            <ButtonArea>
              <InputField placeholder={'Palavra chave'} value={content} onChangeText={setContent}/>
              <ModalButton text={'Confirmar'} onTap={sendPassKey}/>
              <ModalButton text={'Cancelar'} outline onTap={close}/>
            </ButtonArea>
          </>
          }
          { success && 
          <>
            <EmptyState title={'Sucesso!'} description={'Presença registrada com sucesso'} imageSource={SuccessStateImage} imageStyle={{ marginTop: 10, width: 60, height: 60 }} />
            <ModalButton text={'Sair'} outline onTap={close}/>
          </>
           }
          { error && 
          <>
            <EmptyState title={'Erro!'} description={'Nao foi possivel registrar sua presença'} imageSource={ErrorStateImage} imageStyle={{ marginTop: 10, width: 60, height: 60 }} />
            <ModalButton text={'Tentar novamente'} onTap={retry}/>
            <ModalButton text={'Sair'} outline onTap={close}/>
          </>
         }
        </ModalContainer>
      </ModalBackground>
    </Modal>
  )
}
