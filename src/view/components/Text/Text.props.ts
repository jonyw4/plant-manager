import { TextProps as NativeTextProps } from 'react-native';

export interface TextProps extends NativeTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'title' | 'body';
  align?: 'left' | 'center' | 'right';
  weight?: 'bold' | 'regular';
}
