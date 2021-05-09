import { GestureResponderEvent } from 'react-native';

export interface RadioGroupProps {
    defaultValue?: string;
    onChange?: (value: string, e: GestureResponderEvent) => void;
    options: {
        label: string;
        value: any;
    }[];
}
