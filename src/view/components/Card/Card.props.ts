import { RectButtonProps } from 'react-native-gesture-handler';

export interface CardProps extends RectButtonProps {
  title: string;
  children: React.ReactNode;
}
