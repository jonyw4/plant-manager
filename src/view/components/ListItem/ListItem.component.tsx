import React from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Text } from "../Text";
import { ListItemProps } from "./ListItem.props";
import { styles } from "./ListItem.styles";

export function ListItem({
  children,
  secondaryContent,
  style,
  ...props
}: ListItemProps) {
  return (
    <RectButton style={[styles.root, style]} {...props}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {children}
      </View>
      <View style={{ alignItems: "flex-end", justifyContent: 'center' }}>
        {secondaryContent}
      </View>
    </RectButton>
  );
}
