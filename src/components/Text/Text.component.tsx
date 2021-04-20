import React from 'react';
import {
  Text as NativeText,
} from "react-native";
import { TextProps } from "./Text.props";
import { styles as textStyles } from "./Text.style";

export function Text({ children, style, variant = "body" }: TextProps) {
  return (
    <NativeText style={[textStyles[variant], style]}>{children}</NativeText>
  );
}
