import { mapColor } from "assets/utils/utils";
import { SubjectCardBody, SubjectCardText, SubjectCardTitle } from "./subject-card.component.style";

interface SubjectCardProps {
  name: string;
  teacher: string;
  onClick?: () => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = props => {
  return (
    <SubjectCardBody color={mapColor(props.name.slice(0, 3))} onPress={props.onClick}>
      <SubjectCardTitle>{props.name}</SubjectCardTitle>
      <SubjectCardText>{'Professor: ' + props.teacher}</SubjectCardText>
    </SubjectCardBody>
  );  
}
