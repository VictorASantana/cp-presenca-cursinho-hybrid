import { Title } from "assets/utils/global.style";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubjectsBody, SubjectsContainer, SubjectsHeader } from "./subjects.page.style";
import { ScrollView } from "react-native";
import { SubjectCard } from "@src/components/card/subject-card/subject-card.component";
import { SubjectModal } from "@src/components/modal/subject-modal/subject-modal.component";
import { SubjectService } from "@src/data/service/subject.service";
import { Subject } from "@src/data/types/subjects/subject.type";
import EmptyState from "@freakycoder/react-native-empty-state";
import ErrorStateImage from '../../../assets/ErrorStateImage.png';


export const Subjects: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSubjects = async () => {
      const subjectVector = await SubjectService.getSubjects();
      if (!( subjectVector instanceof Error)) {
        console.log(subjectVector);
        setSubjects(subjectVector);
      } else {
        setError(true);
      }
    }
    getSubjects();
  }, []);

  return (
    <>
    <SafeAreaView />
    <SubjectsHeader>
      <Title>{'Disciplinas'}</Title>  
    </SubjectsHeader>  
    <SubjectsBody>
      <ScrollView>
        {error ? 
          <EmptyState 
            title={"Erro!"} 
            description={"Nao foi possivel carregar suas disciplinas"} 
            imageSource={ErrorStateImage}
            imageStyle={{ height: 140, width: 140 }}
            style={{ marginTop: 160 }}
          /> : 
          <SubjectsContainer>
            {subjects.map((subject, index) => (
              <SubjectCard key={subject.name} name={subject.name} mainSubject={subject.mainSubject} onClick={() => {
                setModalVisible(true);
                setSelected(index);
              }}/>
            ))}
          </SubjectsContainer>
        }
      </ScrollView>
      {subjects.length > 0 && <SubjectModal weekDays={subjects[selected].weekDateTimes} visible={modalVisible} subject={subjects[selected].name} mainSubject={subjects[selected].mainSubject} close={() => setModalVisible(false)} />}
    </SubjectsBody>
    </>
  );
}
