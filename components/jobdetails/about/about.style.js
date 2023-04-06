import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.twenty,
    backgroundColor: "#FFF",
    borderRadius: SIZES.sixteen,
    padding: SIZES.sixteen,
  },
  headText: {
    fontSize: SIZES.twenty,
    color: COLORS.primary,
    fontFamily: FONT.bold,
  },
  contentBox: {
    marginVertical: SIZES.twelve,
  },
  contextText: {
    fontSize: SIZES.sixteen - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginVertical: SIZES.twelve / 1.25,
  },
});

export default styles;
