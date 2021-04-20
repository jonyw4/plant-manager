import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from '../Text'
import { ButtonProps } from "./Button.props";
import { styles as buttonStyles } from './Button.style'

export function Button({ children, style, ...props }: ButtonProps){
  return (
    <TouchableOpacity style={[buttonStyles.root, style]} {...props}>
      <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>
  );
}