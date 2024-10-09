import React from "react";
import { ButtonModalStyled, ButtonModalTextStyled } from "./modal-button.component.style";

interface BaseButtonProps {
  onTap?: () => void;
  outline?: boolean;
  text: string;
  width?: number;
  color?: string;
}

export const ModalButton: React.FC<BaseButtonProps> = props => {
  return (
    <ButtonModalStyled onPress={props.onTap} outline={props.outline ?? false} width={props.width} color={props.color}>
      <ButtonModalTextStyled outline={props.outline ?? false} color={props.color}>{props.text}</ButtonModalTextStyled>
    </ButtonModalStyled>
  );
};
