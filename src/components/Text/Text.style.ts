import {
  StyleSheet,
} from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.heading,
    textAlign: "center",
  },
  subtitle: {
    color: colors.body_light,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  body: {
    color: colors.body_light,
  },
});
