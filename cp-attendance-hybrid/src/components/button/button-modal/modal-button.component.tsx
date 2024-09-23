import React from "react";
import { ButtonModalStyled, ButtonModalTextStyled } from "./modal-button.component.style";

interface BaseButtonProps {
  onTap?: () => void;
  outline?: boolean;
  text: string;
  width?: number;
}

export const ModalButton: React.FC<BaseButtonProps> = props => {
  return (
    <ButtonModalStyled onPress={props.onTap} outline={props.outline ?? false} width={props.width}>
      <ButtonModalTextStyled outline={props.outline ?? false}>{props.text}</ButtonModalTextStyled>
    </ButtonModalStyled>
  );
};
