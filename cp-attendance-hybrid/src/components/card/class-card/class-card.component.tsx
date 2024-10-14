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
  function formatDateToHHMM(date: Date): string {
    const hours: string = String(date.getHours()).padStart(2, '0'); // Obtém as horas e garante que tenha 2 dígitos
    const minutes: string = String(date.getMinutes()).padStart(2, '0'); // Obtém os minutos e garante que tenha 2 dígitos
    return `${hours}:${minutes}`; // Retorna a string no formato HH:MM
  }

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
