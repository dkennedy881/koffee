import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export const NavItem = ({
  onPress,
  name = '',
  style = {
    color: 'blue',
  },
  right,
}) => {
  return (
    <View style={{marginLeft: right ? 'auto' : 0}}>
      <TouchableOpacity onPress={onPress}>
        <Text style={style}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};
