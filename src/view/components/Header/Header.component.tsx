import React from "react";
import { View, Image } from "react-native";
import { Text } from "../Text";
import { HeaderProps } from "./Header.props";
import { styles } from './Header.styles';
import userImg from '../../../assets/user.jpg'
 
export function Header({title, subtitle}: HeaderProps) {
  return (
    <View style={styles.root}>
      <View>
        <Text variant="heading" weight="regular" align="left">
          {title}
        </Text>
        <Text variant="heading">{subtitle}</Text>
      </View>
      <Image source={userImg} style={styles.userPhoto}/>
    </View>
  );
}
