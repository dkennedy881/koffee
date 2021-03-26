import React from "react";
import { StyleSheet, View } from "react-native";

const CenterView = ({ children }) => {
  return <View style={styles.CenterViewContainer}>{children}</View>;
};

export default CenterView;
const styles = StyleSheet.create({
  CenterViewContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
