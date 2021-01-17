import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Text, Button } from 'react-native-elements';
import Spacer from './Spacer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import RadioGroup from '../components/RadioGroup'
import {RadioButton} from 'react-native-paper';
import {useToast} from 'react-native-styled-toast';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role,setRole]= useState('')
    const { toast } = useToast()
  const canSing = ()=>{
      if(!email.includes('@')){
          toast({message:"Mail musi zawierać @"});
      }
      else if(password.length<6){
          toast({message:"Hasło musi mieć więcej niż 6 znaków"});
      }
      else if(headerText==="Sign Up for Tracker"&&role===''){
          toast({message:"Wybierz swoją role"});
      }
      else{
          onSubmit({ email, password,role })
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
          {headerText==="Sign Up for Tracker" ?
              <RadioButton.Group onValueChange={newValue => setRole(newValue)} value={role}>
              <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
                  <View>
                      <Text>Uczeń</Text>
                      <RadioButton value="uczen" />
                  </View>
                  <View style={{marginLeft:20}}>
                      <Text>Nauczyciel</Text>
                      <RadioButton value="Nauczyciel" />
                  </View>
              </View>
          </RadioButton.Group>:null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={canSing}
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
