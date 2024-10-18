import { formatDateToHHMM } from "@src/data/mapper/subject/subject.mapper";
import { ClassCardButtonStyled, ClassCardButtonTextStyled, ClassCardStyled, ClassCardTextStyled, ClassCardTitleStyled } from "./class-card.component.style";

interface ClassCardProps {
  title: string;
  activate: boolean;
  isChecked: boolean;
  isNow: boolean;
  time: Date;
  onClick?: () => void;
}

export const ClassCard: React.FC<ClassCardProps> = props => {

  return (
    <ClassCardStyled numberOfClasses={1} activated={props.isNow}>
      <ClassCardTitleStyled>{formatDateToHHMM(props.time)}</ClassCardTitleStyled>
      <ClassCardTextStyled>{props.title}</ClassCardTextStyled>
      {props.activate ? props.isChecked ?
        <ClassCardTextStyled>{'Preseça registrada.'}</ClassCardTextStyled>:
        <ClassCardButtonStyled onPress={props.onClick}>
          <ClassCardButtonTextStyled>{'Registrar Presença'}</ClassCardButtonTextStyled>  
        </ClassCardButtonStyled> 
        : 
        <ClassCardTextStyled>{'Presença indisponível'}</ClassCardTextStyled>}
    </ClassCardStyled>
  );
}
