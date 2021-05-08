import React, { useState } from "react";
import { GestureResponderEvent, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RadioGroupContext } from "../../contexts";
import { RadioGroupProps } from "./RadioGroup.props";
import { styles } from './RadioGroup.styles';
import {Radio } from '../Radio';

export function RadioGroup({ options, defaultValue, onChange }: RadioGroupProps) {
  const state = useState(defaultValue);

  const [currentValue] = state;
  return (
    <RadioGroupContext.Provider value={state}>
      <FlatList
        data={options}
        keyExtractor={(item) => String(item.value)}
        renderItem={({ item: option }) => (
          <Radio
            key={option.value}
            value={option.value}
            isChecked={currentValue === option.value}
            onPress={
              onChange
                ? (event: GestureResponderEvent) =>
                    onChange(option.value, event)
                : undefined
            }
          >
            {option.label}
          </Radio>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginVertical: 20,
        }}
      />
    </RadioGroupContext.Provider>
  );
}