import { StyleSheet } from "react-native";
import { ContainerProps } from "./Container.props";

export const createStyles = ({ maxHeight }: ContainerProps) =>
  StyleSheet.create({
    root: {
      flex: 1,
      alignItems: "center",
    },
    outer: {
      flex: 1,
      width: "100%",
      justifyContent: "center",
      paddingVertical: 80,
      paddingHorizontal: 32,
    },
    inner: {
      flex: 1,
      maxHeight,
      alignItems: "center",
      justifyContent: "space-around",
    },
  });