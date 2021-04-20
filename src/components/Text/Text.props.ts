import { TextProps as NativeTextProps } from "react-native";

export interface TextProps extends NativeTextProps {
  children: React.ReactNode;
  variant?: "title" | "subtitle" | "body";
}
