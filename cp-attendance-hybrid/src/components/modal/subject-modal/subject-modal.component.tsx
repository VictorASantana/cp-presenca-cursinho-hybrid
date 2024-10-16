import React from 'react';
import { Modal, View } from 'react-native';
import { ButtonArea } from '../attendance-modal/attendance-modal.component.style';
import { ModalButton } from '@src/components/button/button-modal/modal-button.component';
import { SubjectModalBackground, SubjectModalContainer, SubjectModalHeader, SubjectModalText, SubjectModalTitle } from './subject-modal.component.style';
import { mapColor } from 'assets/utils/utils';
import { ClassDay } from '@src/data/types/subjects/subject.type';
import Icon from 'react-native-vector-icons/Entypo';

interface ModalProps {
  visible: boolean,
  subject: string,
  teacher: string,
  weekDays: ClassDay[],
  close: () => void,
}

export const SubjectModal = (props: ModalProps) => {

  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.close}
    >
      <SubjectModalBackground>
        <SubjectModalContainer>
          <SubjectModalHeader color={mapColor(props.subject.slice(0,3))}>
            <SubjectModalTitle>{props.subject}</SubjectModalTitle>
          </SubjectModalHeader>
          <ButtonArea>
            <SubjectModalText>{'Professor: ' + props.teacher}</SubjectModalText>
            <SubjectModalText>{'Horários de aula: '}</SubjectModalText>
            {props.weekDays.map(lesson => (
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name='clock' size={20} />
                <SubjectModalText>{lesson.weekDay + ' : ' + lesson.startTime + ' - ' + lesson.endTime}</SubjectModalText>
              </View>
            ))}
            <ModalButton text={'Cancelar'} outline onTap={props.close} color={mapColor(props.subject.slice(0,3))}/>
          </ButtonArea>
        </SubjectModalContainer>
      </SubjectModalBackground>
    </Modal>
  )
}
