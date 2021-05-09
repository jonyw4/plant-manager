import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.shape_gray,
        borderRadius: 20,
        paddingVertical: 32,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginVertical: 16
    }
});
