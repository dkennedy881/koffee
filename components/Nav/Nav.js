import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavItem} from './NavItem';
const Nav = ({setIsLoggedIn, isNewUser = true}) => {
  return (
    <View style={styles.NavMainContainer}>
      <NavItem
        onPress={() => {
          setIsLoggedIn(false);
        }}
        name={'Log out'}
      />
      <NavItem
        onPress={() => {
          alert('in dev');
        }}
        right={true}
        name={'Account'}
        style={{color: isNewUser ? 'red' : 'blue'}}
      />
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  NavMainContainer: {
    flexDirection: 'row',
    padding: 10,
    zIndex: 1,
  },
});
