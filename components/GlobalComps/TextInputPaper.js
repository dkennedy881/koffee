import React from "react";
import { TextInput } from "react-native-paper";

const TextInputPaper = ({ value, setter, secureTextEntry = false }) => {
  return (
    <TextInput
      defaultValue={value}
      style={{
        height: 50,
      }}
      theme={{
        colors: {
          primary: "#ccc",
          background: "white",
        },
      }}
      mode="outlined"
      secureTextEntry={secureTextEntry}
      onChangeText={(val) => {
        setter(val);
      }}
    />
  );
};

export default TextInputPaper;
