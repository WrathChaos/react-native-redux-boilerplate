import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import colors from "colors";

const HomeScreen = props => {
  // const [{ status, response }, makeRequest] = ApiRequest(BASE_URL + GET, {
  //   verb: "get"
  // });
  const { example } = props;

  useEffect(() => {
    // makeRequest();
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
