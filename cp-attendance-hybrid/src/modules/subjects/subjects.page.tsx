import { Title } from "assets/utils/global.style";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SubjectsBody, SubjectsContainer, SubjectsHeader } from "./subjects.page.style";
import { ActivityIndicator, ScrollView } from "react-native";
import { SubjectCard } from "@src/components/card/subject-card/subject-card.component";
import { SubjectModal } from "@src/components/modal/subject-modal/subject-modal.component";
import { SubjectService } from "@src/data/service/subject.service";
import { Subject } from "@src/data/types/subjects/subject.type";
import EmptyState from "@freakycoder/react-native-empty-state";
import ErrorStateImage from '../../../assets/ErrorStateImage.png';
import { useUser } from "@src/context/user.context";
import { Theme } from "assets/theme/theme";
import { View } from "react-native-animatable";


export const Subjects: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState(0);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const user = useUser();

  const getSubjects = useCallback(async () => {
    setLoading(true);
    const subjectVector = await SubjectService.getSubjects(String(user.user?.studentClass));
    if (!(subjectVector instanceof Error)) {
      setSubjects(subjectVector);
      setError(false);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [])

  useEffect(() => {
    getSubjects();
  }, []);

  const handleRefresh = async () => {
    setLoading(true);
    await getSubjects();
    setLoading(false);
  }

  return (
    <>
    <SafeAreaView />
    <SubjectsHeader>
      <Title>{'Disciplinas'}</Title>  
    </SubjectsHeader>  
    <SubjectsBody>
      <ScrollView>
        {loading ? 
        <View style={{ marginTop: 240 }}>
          <ActivityIndicator size={70} style={{ alignSelf: "center" }} color={Theme.Colors.secondary}/>
        </View> :
          error ? 
          <EmptyState 
            title={"Erro!"} 
            description={"Nao foi possivel carregar suas disciplinas"} 
            imageSource={ErrorStateImage}
            imageStyle={{ height: 140, width: 140 }}
            style={{ marginTop: 160 }}
            enableButton
            buttonStyle={{ backgroundColor: Theme.Colors.primary, padding: 10, borderRadius: 8 }}
            buttonText="Tentar novamente?"
            onPress={handleRefresh}
          /> : 
          <SubjectsContainer>
            {subjects.map((subject, index) => (
              <SubjectCard 
                key={subject.name} 
                name={subject.name} 
                mainSubject={subject.mainSubject} 
                onClick={() => {
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
