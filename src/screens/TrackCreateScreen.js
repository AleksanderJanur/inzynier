import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import FromsElements from '../components/FromsElements';
import  { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import MyComponent from '../components/RadioGroup';
import Appbar from 'react-native-paper/src/components/Appbar/Appbar';

const TrackCreateScreen = () => {
  return (
      <View>
        <FromsElements/>
      </View>
);

};

/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
});
*/

export default TrackCreateScreen;
