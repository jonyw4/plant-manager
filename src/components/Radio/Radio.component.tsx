import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useRadioGroup } from "../../hooks";
import { Text } from "../Text";
import { RadioProps } from "./Radio.props";
import { radioStyles, isCheckedStyles } from "./Radio.style";

export function Radio({ children, style, isChecked, value, onPress, ...props }: RadioProps) {
  const radioGroup = useRadioGroup();

  const handleOnPress: TouchableOpacityProps['onPress'] = (e) => {
    if (radioGroup) {
      const [, setValue] = radioGroup;
      setValue(value);
    }
     if (onPress) {
       onPress(e);
     }
  }
  return (
    <TouchableOpacity
      style={[radioStyles.root, isChecked && isCheckedStyles["root"], style]}
      onPress={handleOnPress}
      {...props}
    >
      <Text style={[radioStyles.text, isChecked && isCheckedStyles["text"]]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
