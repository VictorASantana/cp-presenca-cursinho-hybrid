import React from "react";
import { BaseButtonStyled, BaseButtonTextStyled } from "./base-button.component.style";

interface BaseButtonProps {
  onTap?: () => void;
  text: string;
}

export const BaseButton: React.FC<BaseButtonProps> = props => {
  return (
    <BaseButtonStyled onPress={props.onTap}>
      <BaseButtonTextStyled>{props.text}</BaseButtonTextStyled>
    </BaseButtonStyled>
  );
};
