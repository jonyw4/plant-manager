import React from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Text } from "../Text";
import { CardProps } from "./Card.props";
import { styles } from "./Card.styles";

export function Card({children, title, style, ...props}: CardProps){
  return (
    <RectButton style={[styles.root, style]} {...props}>
      {children}
      <Text variant="body" weight="bold" style={styles.text}>{title}</Text>
    </RectButton>
  )
}