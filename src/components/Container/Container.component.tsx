import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback, View } from 'react-native';
import { ContainerProps } from './Container.props'
import { createStyles } from './Container.styles'

export function Container(props: ContainerProps){
  const { children, dismissKeyboardOnTouch = false } = props;
  const styles = createStyles(props);
  
  return (
    <SafeAreaView style={styles.root}>
      <TouchableWithoutFeedback
        onPress={dismissKeyboardOnTouch ? Keyboard.dismiss : undefined}
      >
        <View style={styles.outer}>
          <View style={styles.inner}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}