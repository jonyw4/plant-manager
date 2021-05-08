import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import { ContainerProps } from './Container.props'
import { createStyles } from './Container.styles'

export function Container(props: ContainerProps){
  const {
    children,
    dismissKeyboardOnTouch = false,
    justifyContent = "space-between",
    flexGrow = 1,
    flexBasis = 1,
    paddingVertical = 80,
    paddingBottom = 80,
    alignItems = "center"
  } = props;
  const styles = createStyles({
    ...props,
    paddingVertical,
    paddingBottom,
    justifyContent,
    flexBasis,
    flexGrow,
    alignItems,
  });

  const content = (
    <View style={styles.outer}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.root}>
      {dismissKeyboardOnTouch ? (
        <TouchableWithoutFeedback
          onPress={dismissKeyboardOnTouch ? Keyboard.dismiss : undefined}
        >
          {content}
        </TouchableWithoutFeedback>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}