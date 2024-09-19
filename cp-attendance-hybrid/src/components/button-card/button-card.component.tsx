import React from "react";
import { ButtonCardTextStyled, ButtonCardWrapperStyled } from "./button-card.component.style";
import Icon from "react-native-vector-icons/Ionicons";
import { Theme } from "assets/theme/theme";

interface ButtonCardProps {
  text: string;
  icon: string;
  onTap: () => void;
  color?: string;
};

export const ButtonCard: React.FC<ButtonCardProps> = props => {
  return (
    <ButtonCardWrapperStyled onPress={props.onTap}>
      <Icon name={props.icon} size={24} color={props.color ?? Theme.Colors.darkGray}/>
      <ButtonCardTextStyled color={props.color ?? Theme.Colors.darkGray}>{props.text}</ButtonCardTextStyled>
    </ButtonCardWrapperStyled>
  );
;
}
