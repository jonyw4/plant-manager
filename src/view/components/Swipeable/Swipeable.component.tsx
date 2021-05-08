import React from "react";
import { Animated, View } from "react-native";
import RNSwipeable from "react-native-gesture-handler/Swipeable";
import { SwipeableProps } from "./Swipeable.props";

export function Swipeable({ swipeContent, children }: SwipeableProps) {
  return (
    <RNSwipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>{swipeContent}</View>
        </Animated.View>
      )}
    >
      {children}
    </RNSwipeable>
  );
}
