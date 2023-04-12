import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.twenty,
    backgroundColor: "#FFF",
    borderRadius: SIZES.sixteen,
    padding: SIZES.sixteen,
  },
  title: {
    fontSize: SIZES.twenty,
    color: COLORS.primary,
    fontFamily: FONT.poppins,
  },
  pointsContainer: {
    marginVertical: SIZES.twelve,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: SIZES.twelve / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: COLORS.gray2,
    marginTop: 6,
  },
  pointText: {
    fontSize: SIZES.sixteen - 2,
    color: COLORS.gray,
    fontFamily: FONT.poppins,
    marginLeft: SIZES.twelve,
  },
});

export default styles;
