import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native';
import {ButtonPaper} from '../../GlobalComps';

const EditAccountAlert = ({show}) => {
  const [doShowAlert, setDoShowAlert] = useState(show);

  if (doShowAlert) {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          padding: 10,
          alignItems: 'center',
          zIndex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'white',
            top: 100,
            padding: 20,
            width: Dimensions.get('window').width - 50,
            minHeight: Dimensions.get('window').height / 3,
            shadowColor: '#000',
            shadowOffset: {
              width: 5,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}>
          <View
            style={{
              paddingTop: 5,
              paddingBottom: 5,
            }}>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 30,
                textAlign: 'center',
              }}>
              Welcom to Koffee!
            </Text>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
              }}>
              To create a better community, Please update your account
              information.
            </Text>
          </View>
          <View
            style={{
              textAlign: 'center',
              borderRadius: 9,
              marginTop: 'auto',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDoShowAlert(false);
              }}>
              <ButtonPaper text="Later" color={'#ccc'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                alert('In Dev');
              }}>
              <ButtonPaper text="Update Now" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return <></>;
};

export default EditAccountAlert;
