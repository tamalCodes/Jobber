import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.twenty,
    fontFamily: FONT.poppins,
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.sixteen,
    fontFamily: FONT.poppins,
    color: COLORS.gray,
  },
  cardsContainer: {
    marginTop: SIZES.sixteen,
  },
});

export default styles;
