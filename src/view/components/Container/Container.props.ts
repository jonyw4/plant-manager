import { FlexStyle } from "react-native";

export interface ContainerProps {
  children: React.ReactNode;
  maxHeight?: number;
  paddingVertical?: number;
  dismissKeyboardOnTouch?: boolean;
  justifyContent?: FlexStyle["justifyContent"];
  flexGrow?: FlexStyle["flexGrow"];
  flexBasis?: FlexStyle["flexBasis"];
  alignItems?: FlexStyle["alignItems"];
  paddingBottom?: FlexStyle["paddingBottom"];
}