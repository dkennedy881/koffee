import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Nav} from '..';
import {FullPageScrollView} from '../../pageLayouts/FullPageScrollView';
import {EditAccountAlert} from '../Alerts';

const RoomPreview = ({
  children,
  title,
  createdByName,
  startDateTime,
  endDateTime,
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableOpacity>
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
        <View style={styles.sectionMeta}>
          <Text style={{fontSize: 20}}>Today at </Text>
          <Text style={{color: 'green', fontSize: 30}}>{startDateTime}</Text>
          <Text style={{fontSize: 20}}> to </Text>
          <Text style={{color: 'red', fontSize: 30}}>{endDateTime}</Text>
        </View>
        <View style={styles.sectionMeta}>
          <Text>{`By ${createdByName}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Home = ({userData, setIsLoggedIn}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {firstName, lastName, password, interests, isNewUser} = userData; // TODO to use

  return (
    <SafeAreaView style={backgroundStyle}>
      <EditAccountAlert show={true} />
      <Nav setIsLoggedIn={setIsLoggedIn} isNewUser={true} />
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <FullPageScrollView>
        <RoomPreview
          title={'We Love Tacos'}
          createdByName={'demarcus.kennedy'}
          startDateTime={'2:00 PM'}
          endDateTime={'3:00 PM'}>
          {'This is about tacos and love. both should be treated equally'}
        </RoomPreview>
        <RoomPreview
          title={'Hot Grill Summer'}
          createdByName={'meg.the.stylist'}
          startDateTime={'5:00 PM'}
          endDateTime={'6:00 PM'}>
          {
            "She a big ol' freak, it's a must that I hit It's a Hot Girl Summer, so you know she got it lit Real ass bitch, know she got it lit"
          }
        </RoomPreview>
        <RoomPreview
          title={'Coders Unit'}
          createdByName={'meg.the.stylist'}
          startDateTime={'5:00 PM'}
          endDateTime={'6:00 PM'}>
          {'Safe space for nerds to discuss whatever we like!'}
        </RoomPreview>
        <RoomPreview
          title={'Hot Grill Summer'}
          createdByName={'meg.the.stylist'}
          startDateTime={'12:00 PM'}
          endDateTime={'1:00 PM'}>
          {
            "She a big ol' freak, it's a must that I hit It's a Hot Girl Summer, so you know she got it lit Real ass bitch, know she got it lit"
          }
        </RoomPreview>
        <RoomPreview
          title={'Hot Grill Summer'}
          createdByName={'meg.the.stylist'}
          startDateTime={'5:00 PM'}
          endDateTime={'6:00 PM'}>
          {
            "She a big ol' freak, it's a must that I hit It's a Hot Girl Summer, so you know she got it lit Real ass bitch, know she got it lit"
          }
        </RoomPreview>
      </FullPageScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 24,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionMeta: {
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 10,
    flexDirection: 'row',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
