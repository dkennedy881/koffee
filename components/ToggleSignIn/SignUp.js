import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './CompStyles';
import {TextInputPaper, ButtonPaper} from '../GlobalComps';

const Step1 = ({
  username,
  password,
  password2,
  step,
  setUsername,
  setPassword,
  setPassword2,
  setStep,
  isEmailValid,
  isPasswordValid,
}) => {
  const validateEmailAndPassword = () => {
    if (isEmailValid() && isPasswordValid()) {
      setStep(step + 1);
    }
  };
  return (
    <>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>Email</Text>
        <TextInputPaper value={username} setter={setUsername} />
      </View>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>Password</Text>
        <TextInputPaper value={password} setter={setPassword} secureTextEntry />
      </View>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>Re-enter Password</Text>
        <TextInputPaper
          value={password2}
          setter={setPassword2}
          secureTextEntry
        />
      </View>
      <View style={styles.ButtonSection}>
        <ButtonPaper text={'Submit'} onPress={validateEmailAndPassword} />
      </View>
    </>
  );
};

const Step2 = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  doSignUp,
  setStep,
  step,
}) => {
  return (
    <>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>First Name</Text>
        <TextInputPaper value={firstName} setter={setFirstName} />
      </View>
      <View style={styles.ContentSection}>
        <Text style={styles.SectionText}>Last Name</Text>
        <TextInputPaper value={lastName} setter={setLastName} />
      </View>
      <View style={styles.ButtonSection}>
        <ButtonPaper
          text={'Create Account'}
          color="saddlebrown"
          onPress={doSignUp}
        />

        <ButtonPaper
          text={'Back'}
          color="white"
          onPress={() => {
            setStep(step - 1);
          }}
        />
      </View>
    </>
  );
};

const SignUp = ({
  username,
  password,
  password2,
  signedUp,
  loading,
  setUsername,
  setPassword,
  setPassword2,
  setSignedUp,
  doSignUp,
  hasError,
  errorMessage = 'Unknown error',
  firstName,
  setFirstName,
  lastName,
  setLastName,
  isEmailValid,
  isPasswordValid,
}) => {
  const [step, setStep] = useState(1);

  const StepDisplay = () => {
    if (step === 1) {
      return (
        <Step1
          username={username}
          password={password}
          password2={password2}
          step={step}
          setUsername={setUsername}
          setPassword={setPassword}
          setPassword2={setPassword2}
          setStep={setStep}
          isEmailValid={isEmailValid}
          isPasswordValid={isPasswordValid}
        />
      );
    }
    if (step === 2) {
      return (
        <Step2
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          step={step}
          setStep={setStep}
          doSignUp={doSignUp}
        />
      );
    }
  };
  return (
    <>
      <View style={styles.ContentSection}>
        <Text style={styles.MainText}>
          Sign Up ☕ {loading && <Text>......</Text>}
        </Text>
        <View style={styles.MainTextErrorContainer}>
          {hasError && <Text style={styles.MainTextError}>{errorMessage}</Text>}
        </View>
      </View>
      {StepDisplay()}
      <View style={styles.ButtonSectionMain}>
        <TouchableOpacity
          onPress={() => {
            setSignedUp(!signedUp);
          }}>
          <Text style={styles.BasicCenterText}>
            Already have an Account? Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignUp;
