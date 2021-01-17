import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import {Context as AuthContext} from '../context/AuthContext';
import {Appbar} from 'react-native-paper';
import {navigate} from '../navigationRef';

const TrackDetailScreen = () => {

  const {state: stateS, fetchUser } = useContext(AuthContext);
  useEffect(() => {
    // fetchForms();
    fetchUser();
  }, []);

  return(
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigate('TrackList')}/>
          {/*czemu to tak dziwnie dziala*/}
          <Appbar.Content title="MyApp" subtitle="Twoje spotkaknia" />
          {/*<Appbar.Action icon="magnify" />*/}
          {/*<Appbar.Action icon="dots-vertical"  />*/}
        </Appbar.Header>
      {console.log(stateS)}
      <Text style={{ fontSize: 48 }}>TrackDetailScreen</Text>
      </View>
      );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
