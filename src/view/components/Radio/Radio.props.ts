import { TouchableOpacityProps } from "react-native";

export interface RadioProps extends TouchableOpacityProps {
  children: React.ReactNode;
  value: any;
  isChecked?: boolean;
}