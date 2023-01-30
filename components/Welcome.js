import react from "react";
import { View, Text } from "react-native";

const Welcome = (props) => {
  return (
    <View>
      <Text>Hello {props.names}</Text>
    </View>
  );
};

export default Welcome;
