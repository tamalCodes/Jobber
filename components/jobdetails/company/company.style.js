import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.sixteen,
    justifyContent: "center",
    alignItems: "center",
  },
  logoBox: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: SIZES.twenty,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  jobTitleBox: {
    marginTop: SIZES.twelve,
  },
  jobTitle: {
    fontSize: SIZES.twenty,
    color: COLORS.primary,
    fontFamily: FONT.poppins,
    textAlign: "center",
  },
  companyInfoBox: {
    marginTop: SIZES.twelve / 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  companyName: {
    fontSize: SIZES.sixteen - 2,
    color: COLORS.primary,
    fontFamily: FONT.poppins,
  },
  locationBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationImage: {
    width: 14,
    height: 14,
    tintColor: COLORS.gray,
  },
  locationName: {
    fontSize: SIZES.sixteen - 2,
    color: COLORS.gray,
    fontFamily: FONT.poppins,
    marginLeft: 2,
  },
});

export default styles;
