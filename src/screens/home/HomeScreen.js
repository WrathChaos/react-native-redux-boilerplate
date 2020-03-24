import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import colors from "colors";
import { fetchExample } from "api";

const HomeScreen = props => {
  const { example } = props;

  useEffect(() => {
    fetchExample();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text>HomeScreen</Text>
    </View>
  );
};

HomeScreen.propTypes = {
  example: PropTypes.number
};

HomeScreen.defaultProps = {
  example: 5
};

export default HomeScreen;
