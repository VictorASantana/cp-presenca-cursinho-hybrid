import { useEffect, useState } from "react";
import { ClassCardButtonStyled, ClassCardButtonTextStyled, ClassCardStyled, ClassCardTextStyled, ClassCardTitleStyled } from "./class-card.component.style";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ClassCardProps {
  title: string;
  activate: boolean;
  id: string;
  isNow: boolean;
  time: Date;
  onClick?: () => void;
}

export const ClassCard: React.FC<ClassCardProps> = props => {
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    const getChecked = async () => {
      const checked = await AsyncStorage.getItem(props.id) 
      setIsChecked(!!checked);
    }
    getChecked();
  }, [props.onClick]);
  
  function formatDateToHHMM(date: Date): string {
    const hours: string = String(date.getHours()).padStart(2, '0');
    const minutes: string = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`; 
  }

  return (
    <ClassCardStyled numberOfClasses={1} activated={props.isNow}>
      <ClassCardTitleStyled>{formatDateToHHMM(props.time)}</ClassCardTitleStyled>
      <ClassCardTextStyled>{props.title}</ClassCardTextStyled>
      {props.activate ? isChecked ?
        <ClassCardTextStyled>{'Preseça registrada.'}</ClassCardTextStyled>:
        <ClassCardButtonStyled onPress={props.onClick}>
          <ClassCardButtonTextStyled>{'Registrar Presença'}</ClassCardButtonTextStyled>  
        </ClassCardButtonStyled> 
        : 
        <ClassCardTextStyled>{'Presença indisponível'}</ClassCardTextStyled>}
    </ClassCardStyled>
  );
}
