import React from 'react';
import {
  Text as NativeText,
} from "react-native";
import { TextProps } from "./Text.props";
import { variantStyles, textAlignStyles, weightStyles } from "./Text.style";

export function Text({
  children,
  style,
  variant = "body",
  align,
  weight,
}: TextProps) {
  return (
    <NativeText
      style={[
        variantStyles[variant],
        align && textAlignStyles[align],
        weight && weightStyles[weight],
        style,
      ]}
    >
      {children}
    </NativeText>
  );
}
