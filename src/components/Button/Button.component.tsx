import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from '../Text'
import { ButtonProps } from "./Button.props";
import { styles as buttonStyles } from './Button.style'

export function Button({ children, style, size = 'normal', ...props }: ButtonProps){
  return (
    <RectButton 
      style={[
        buttonStyles.root, 
        size === 'block' && buttonStyles.sizeBlock,
        style
      ]} 
      {...props}
    >
      <Text style={buttonStyles.text}>{children}</Text>
    </RectButton>
  );
}