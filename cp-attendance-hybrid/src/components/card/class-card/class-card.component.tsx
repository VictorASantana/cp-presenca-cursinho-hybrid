import { ClassCardButtonStyled, ClassCardButtonTextStyled, ClassCardStyled, ClassCardTextStyled, ClassCardTitleStyled } from "./class-card.component.style";

interface ClassCardProps {
  title: string;
  activate: boolean;
}

export const ClassCard: React.FC<ClassCardProps> = props => {
  return (
    <ClassCardStyled numberOfClasses={1} activated={props.activate}>
      <ClassCardTitleStyled>{props.title}</ClassCardTitleStyled>
      <ClassCardTextStyled>{'Disciplina'}</ClassCardTextStyled>
      {props.activate ? 
        <ClassCardButtonStyled>
          <ClassCardButtonTextStyled>{'Registrar Presença'}</ClassCardButtonTextStyled>  
        </ClassCardButtonStyled> 
        : 
        <ClassCardTextStyled>{'Presença indisponível'}</ClassCardTextStyled>}
    </ClassCardStyled>
  );
}
