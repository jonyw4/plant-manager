import React, { useState } from "react";
import { TextInput as NativeTextInput } from "react-native";
import { TextInputProps } from "./TextInput.props";
import { styles as textInputStyles } from "./TextInput.style";

export function TextInput({style, ...props}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const onBlur: TextInputProps['onBlur'] = (e) => {
    if (props.onBlur) {
      props.onBlur(e);
    }
    setIsFocused(false);
  }

  const onFocus: TextInputProps['onFocus'] = (e) => {
    if (props.onFocus) {
      props.onFocus(e);
    }
    setIsFocused(true);
  }
  return (
    <NativeTextInput
      style={[
        textInputStyles.root,
        isFocused && textInputStyles.focused,
        style
      ]}
      {...props}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}
