import {
  StyleSheet,
} from "react-native";
import colors from "../../styles/colors";

export const variantStyles = StyleSheet.create({
  heading: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "600",
    color: colors.heading,
    textAlign: "center",
  },
  title: {
    fontFamily: "Jost_600SemiBold",
    fontSize: 24,
    fontWeight: "600",
    color: colors.heading,
    textAlign: "center",
  },
  body: {
    fontFamily: "Jost_400Regular",
    color: colors.body_dark,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 25,
    textAlign: "center",
  }
});

export const weightStyles = StyleSheet.create({
  bold: {
    fontFamily: "Jost_600SemiBold",
    fontWeight: "600",
  },
  regular: {
    fontFamily: "Jost_400Regular",
    fontWeight: "400",
  },
});

export const textAlignStyles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});