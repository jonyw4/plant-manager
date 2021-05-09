import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  root: {
    fontFamily: 'Jost_400Regular',
    fontSize: 17,
    color: colors.body_dark,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: colors.body_light,
    paddingVertical: 12,
    width: '100%'
  },
  focused: {
    borderColor: colors.green
  }
});
