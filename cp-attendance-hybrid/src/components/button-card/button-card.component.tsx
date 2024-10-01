import React from "react";
import { ButtonCardTextStyled, ButtonCardWrapperStyled } from "./button-card.component.style";
import Icon from "react-native-vector-icons/Ionicons";

interface ButtonCardProps {
  text: string;
  icon: string;
  onTap: () => void;
};

export const ButtonCard: React.FC<ButtonCardProps> = props => {
  return (
    <ButtonCardWrapperStyled onPress={props.onTap}>
      <Icon name={props.icon} size={24}/>
      <ButtonCardTextStyled>{props.text}</ButtonCardTextStyled>
    </ButtonCardWrapperStyled>
  );
;
}
