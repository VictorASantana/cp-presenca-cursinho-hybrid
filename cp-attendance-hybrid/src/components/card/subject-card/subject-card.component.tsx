import { mapColor } from "assets/utils/utils";
import { SubjectCardBody, SubjectCardText, SubjectCardTitle } from "./subject-card.component.style";
import { mainSubjectMapper } from "@src/data/mapper/subject/subject.mapper";

interface SubjectCardProps {
  name: string;
  mainSubject: string;
  onClick?: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = props => {
  return (
    <SubjectCardBody color={mapColor(props.mainSubject)} onPress={props.onClick}>
      <SubjectCardTitle>{props.name}</SubjectCardTitle>
      <SubjectCardText>{'Disciplina: ' + mainSubjectMapper(props.mainSubject)}</SubjectCardText>
    </SubjectCardBody>
  );  
}
