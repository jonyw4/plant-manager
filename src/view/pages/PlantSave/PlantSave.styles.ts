import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const headerStyle = StyleSheet.create({
    root: {
        backgroundColor: colors.shape,
        paddingHorizontal: 32,
        paddingVertical: 64,
        paddingBottom: 80,
        alignItems: 'center'
    },
    title: {
        paddingVertical: 20
    }
});

export const waterTipsStyle = StyleSheet.create({
    root: {
        backgroundColor: colors.blue_light,
        marginVertical: 32,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        marginTop: -50,
        padding: 20
    },
    image: {
        width: 56,
        height: 56
    },
    text: {
        flex: 1,
        marginLeft: 20,
        color: colors.blue,
        fontSize: 15,
        textAlign: 'left'
    }
});

export const dateTimePickerStyle = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 12,
        marginBottom: 5
    }
});
