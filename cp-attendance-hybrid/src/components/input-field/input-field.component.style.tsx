import React, { useState } from "react";
import { InputFieldStyled } from "./input-field.component"
import { TextInputProps } from "react-native";

export const InputField: React.FC<TextInputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <InputFieldStyled 
      {...props}
      isFocused={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}
