import {
  StyleSheet,
} from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    margin: 10,
    paddingHorizontal: 40,
    height: 56
  },
  text: {
    color: colors.white,
    fontSize: 17
  }
});
