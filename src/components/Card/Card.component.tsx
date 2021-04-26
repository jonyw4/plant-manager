import React from "react";
import { View } from "react-native";
import { Text } from "../Text";
import { CardProps } from "./Card.props";
import { styles } from "./Card.styles";

export function Card({children, title}: CardProps){
  return (
    <View style={styles.root}>
      {children}
      <Text variant="body" weight="bold">{title}</Text>
    </View>
  )
}