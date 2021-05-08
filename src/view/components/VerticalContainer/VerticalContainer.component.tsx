import React from "react";
import { View } from "react-native";
import { VerticalContainerProps } from "./VerticalContainer.props";
import { styles } from "./VerticalContainer.styles";

export function VerticalContainer(props: VerticalContainerProps){
  return <View style={styles.root} {...props}/>
}