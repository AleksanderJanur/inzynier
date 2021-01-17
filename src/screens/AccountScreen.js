import React, {useContext, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import {NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AccountDetails from '../components/AccountDeatails';
import {Appbar} from 'react-native-paper';
import {navigate} from '../navigationRef';

const AccountScreen = () => {
  const {state, fetchUser,signout } = useContext(AuthContext);
    useEffect(() => {
        fetchUser();
    }, []);
  return (
      <View>
      <Appbar.Header>
          <Appbar.BackAction onPress={()=>navigate('TrackList')} />
          <Appbar.Content title="MyApp" subtitle="Twoje konto"/>
          {/*<Appbar.Action icon="magnify" />*/}
          {/*<Appbar.Action icon="dots-vertical"  />*/}
      </Appbar.Header>
        <AccountDetails/>
      <Spacer>
        <Button mode="contained" onPress={signout}>Wyloguj się</Button>
      </Spacer>
      </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
