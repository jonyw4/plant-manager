import { RectButtonProps } from 'react-native-gesture-handler';

export interface ButtonProps extends RectButtonProps {
  children: React.ReactNode;
  size?: 'normal' | 'block';
}
