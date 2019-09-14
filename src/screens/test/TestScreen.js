import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const TestScreen = props => {
  const { example } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>TestScreen</Text>
    </View>
  );
};

TestScreen.propTypes = {
  example: PropTypes.number
};

TestScreen.defaultProps = {
  example: 5
};

export default TestScreen;
