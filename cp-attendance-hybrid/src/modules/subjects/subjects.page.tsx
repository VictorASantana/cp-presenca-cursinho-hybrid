import { Title } from "assets/utils/global.style";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubjectsBody, SubjectsContainer, SubjectsHeader } from "./subjects.page.style";
import { ScrollView } from "react-native";
import { subjectsMock } from "@src/data/mock/subjects.mock";
import { SubjectCard } from "@src/components/card/subject-card/subject-card.component";
import { SubjectModal } from "@src/components/modal/subject-modal/subject-modal.component";


export const Subject: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <>
    <SafeAreaView />
    <SubjectsHeader>
      <Title>{'Disciplinas'}</Title>  
    </SubjectsHeader>  
    <SubjectsBody>
      <ScrollView>
        <SubjectsContainer>
          {subjectsMock.map((subject, index) => (
            <SubjectCard key={index} name={subject.name} teacher={subject.teacher} onClick={() => {
              setModalVisible(true);
              setSelected(index);
            }}/>
          ))}
        </SubjectsContainer>
      </ScrollView>
      <SubjectModal weekDays={subjectsMock[selected].weekDateTimes} visible={modalVisible} subject={subjectsMock[selected].name} teacher={subjectsMock[selected].teacher} close={() => setModalVisible(false)} />
    </SubjectsBody>
    </>
  );
}
