import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.poppins,
    fontSize: SIZES.sixteen,
    color: COLORS.black,
  },
  welcomeMessage: {
    fontFamily: FONT.poppins,
    fontSize: SIZES.twentyFour,
    color: COLORS.black,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.twenty,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.gray2,
    marginRight: SIZES.twelve,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.ten,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.poppins,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.twelve,
    borderRadius: SIZES.ten,
  },
  searchBtn: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.sixteen,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: 30,
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.sixteen,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.twelve / 2,
    paddingHorizontal: SIZES.twelve,
    borderRadius: SIZES.sixteen,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.lightblack,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.lightblack,
  }),
});

export default styles;
