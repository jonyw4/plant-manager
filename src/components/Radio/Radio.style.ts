import {
  StyleSheet,
} from "react-native";
import colors from "../../styles/colors";

export const radioStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.shape,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    margin: 10,
    minWidth: 76,
    height: 40,
  },
  text: {
    color: colors.body_dark,
    fontSize: 13,
    lineHeight: 23,
  },
});

export const isCheckedStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.green_dark,
    fontFamily: "Jost_600SemiBold",
    fontWeight: "600",
  },
});