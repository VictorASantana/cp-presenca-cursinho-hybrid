import React from "react";
import { ButtonModalStyled, ButtonModalTextStyled } from "./base-button.component.style";

interface BaseButtonProps {
  onTap?: () => void;
  outline?: boolean;
  text: string;
}

export const ModalButton: React.FC<BaseButtonProps> = props => {
  return (
    <ButtonModalStyled onPress={props.onTap} outline={props.outline ?? false}>
      <ButtonModalTextStyled outline={props.outline ?? false}>{props.text}</ButtonModalTextStyled>
    </ButtonModalStyled>
  );
};
