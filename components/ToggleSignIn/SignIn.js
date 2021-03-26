import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { TextInputPaper, ButtonPaper } from "../GlobalComps";
import { styles } from "./CompStyles";

const SignIn = ({
  username,
  password,
  signedUp,
  loading,
  setUsername,
  setPassword,
  setSignedUp,
  doSignIn,
  hasError,
  errorMessage = "Unknown error",
}) => {
  return (
    <>
      <View style={styles.ContentSection}>
        <Text style={styles.MainText}>
          Sign In {loading && <Text>......</Text>}
        </Text>
        <View style={styles.MainTextErrorContainer}>
          {hasError && <Text style={styles.MainTextError}>{errorMessage}</Text>}
        </View>
      </View>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>Email</Text>
        <TextInputPaper value={username} setter={setUsername} />
      </View>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>Password</Text>
        <TextInputPaper value={password} setter={setPassword} secureTextEntry />
      </View>
      <View style={styles.ButtonSection}>
        <ButtonPaper text={"Sign In"} onPress={doSignIn} />
      </View>
      <View style={styles.ButtonSectionMain}>
        <TouchableOpacity
          onPress={() => {
            setSignedUp(!signedUp);
          }}
        >
          <Text style={styles.BasicCenterText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignIn;
