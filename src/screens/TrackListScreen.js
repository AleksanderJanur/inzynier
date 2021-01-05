import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Spacer from '../components/Spacer';
import SearchBar from '../components/SearchBar';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
        <SearchBar></SearchBar>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
