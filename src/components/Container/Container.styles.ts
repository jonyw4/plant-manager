import { StyleSheet } from "react-native";
import { ContainerProps } from "./Container.props";

export const createStyles = ({
  maxHeight,
  paddingVertical,
  justifyContent,
  flexGrow,
  flexBasis,
  alignItems,
  paddingBottom,
}: ContainerProps) =>
  StyleSheet.create({
    root: {
      flexGrow,
      flexBasis,
      alignItems: "center",
    },
    outer: {
      flexGrow,
      flexBasis,
      width: "100%",
      justifyContent: "center",
      paddingBottom: paddingBottom,
      paddingVertical: paddingVertical,
      paddingHorizontal: 32,
    },
    inner: {
      flexGrow,
      flexBasis,
      maxHeight,
      alignItems: alignItems,
      justifyContent: justifyContent,
    },
  });