import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.twelve,
    marginBottom: SIZES.twelve / 2,
  },
  btn: (name, activeTab) => ({
    paddingVertical: SIZES.sixteen,
    paddingHorizontal: SIZES.twentyFour,
    backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
    borderRadius: SIZES.sixteen,
    marginLeft: 2,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  }),
  btnText: (name, activeTab) => ({
    fontFamily: "DMMedium",
    fontSize: SIZES.twelve,
    color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
  }),
});

export default styles;
