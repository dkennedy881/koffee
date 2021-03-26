import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import CenterView from '../../pageLayouts/CenterView';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {styles as CompStyles} from './CompStyles';
import {globalFetch} from '../../utils/globalFetch';

const ToggleSignIn = ({setUserData, setIsLoggedIn}) => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [password2, setPassword2] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [signedUp, setSignedUp] = useState(false);

  const [loading, setLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [errorMessage, setErrorMessage] = useState(false);

  const doClearError = () => {
    setHasError(false);
    setErrorMessage('');
  };

  const doSetError = message => {
    setLoading(false);
    setErrorMessage(message);
    setHasError(true);
  };

  useEffect(() => {
    doClearError();
  }, [username, password, password2, signedUp]);

  const doSignIn = async () => {
    if (username && password) {
      setLoading(true);
      doClearError();
      try {
        const {data} = await globalFetch(
          'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/koffee-fqbhd/service/LogIn/incoming_webhook/webhook0',
          'post',
          {
            username,
            password,
          },
        );
        const {valid, message} = data;
        if (typeof valid === 'boolean') {
          if (valid) {
            setLoading(false);
            const {userData} = data;
            setUserData(userData);
            setIsLoggedIn(true);
          } else {
            doSetError(message);
          }
        } else {
          console.error('db log in error');
          console.error(data);
          doSetError('db log in error');
        }
      } catch (e) {
        console.error('connection log in error');
        console.error(e);
        doSetError('connection log in error');
      }
    }
  };

  const isPasswordValid = () => {
    if (/\s/g.test(password)) {
      setHasError(true);
      setErrorMessage('Password may not contain spaces');
      return false;
    }
    if (password !== password2) {
      setHasError(true);
      setErrorMessage('Password must match');
      return false;
    }
    return true;
  };

  const isEmailValid = () => {
    if (
      !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        username,
      )
    ) {
      setHasError(true);
      setErrorMessage('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const doSignUp = async () => {
    if (password && username) {
      if (isEmailValid() && isPasswordValid()) {
        if (username && password) {
          setLoading(true);
          doClearError();
          try {
            const {data} = await globalFetch(
              'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/koffee-fqbhd/service/CreateAccount/incoming_webhook/webhook0',
              'post',
              {
                username,
                password,
                firstName,
                lastName,
              },
            );

            const {valid, message} = data;

            if (typeof valid === 'boolean') {
              if (valid) {
                setLoading(false);
                const {userData} = data;
                setUserData(userData);
                setIsLoggedIn(true);
              } else {
                doSetError(message);
              }
            } else {
              console.error('db log in error');
              console.error(data);
              doSetError('db log in error');
            }
          } catch (e) {
            console.error('network sign up error');
            console.error(data);
            doSetError('network sign up error');
          }
        }
      }
    }
  };

  return (
    <View style={CompStyles.container}>
      <CenterView>
        <View style={CompStyles.MainContainer}>
          <ScrollView
            style={{width: '100%'}}
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps={'always'}>
            <View style={CompStyles.CenterAlign}>
              <View style={CompStyles.ContentContainer}>
                {signedUp ? (
                  <SignIn
                    username={username}
                    password={password}
                    signedUp={signedUp}
                    loading={loading}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setSignedUp={setSignedUp}
                    doSignIn={doSignIn}
                    hasError={hasError}
                    errorMessage={errorMessage}
                  />
                ) : (
                  <SignUp
                    username={username}
                    password={password}
                    password2={password2}
                    signedUp={signedUp}
                    loading={loading}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setPassword2={setPassword2}
                    setSignedUp={setSignedUp}
                    doSignUp={doSignUp}
                    hasError={hasError}
                    errorMessage={errorMessage}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    isEmailValid={isEmailValid}
                    isPasswordValid={isPasswordValid}
                  />
                )}
              </View>
            </View>
          </ScrollView>
        </View>
      </CenterView>
    </View>
  );
};

export default ToggleSignIn;
