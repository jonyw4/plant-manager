import { RectButtonProps } from 'react-native-gesture-handler';

export interface ListItemProps extends RectButtonProps {
  secondaryContent: React.ReactNode;
  children: React.ReactNode;
}
