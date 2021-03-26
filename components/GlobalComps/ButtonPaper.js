import React from "react";
import { Button } from "react-native-paper";

const ButtonPaper = ({
  color = "saddlebrown",
  mode = "contained",
  text = "Submit",
  onPress,
}) => {
  return (
    <Button
      theme={{
        colors: {
          primary: color,
        },
      }}
      mode={mode}
      onPress={onPress}
    >
      {text}
    </Button>
  );
};

export default ButtonPaper;
