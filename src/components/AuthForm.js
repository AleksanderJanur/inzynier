import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from './Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import RadioGroup from '../components/RadioGroup'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const helpFunction = ()=>{
      if(headerText==="Sign Up for Tracker"){
          return <RadioGroup></RadioGroup>
      }
  }

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
          placeholder='email@adres.com'
          leftIcon={
              <Icon
                  name='user'
                  size={24}
                  color='black'
              />
          }
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
          placeholder='password'
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {/*wiem, ze moge zrobic ble ? to:null ale pytanie czy to stylizowac, bo fajnie wyglada czy uzyc tego ze zwyklego forma ???*/}
          {helpFunction()}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
