import React, { useContext } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { SocialIcon} from 'react-native-elements';
import Select from 'react-select'
import Spacer from '../components/Spacer';
import RadioGroup from '../components/RadioGroup'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
        <View style={{flexDirection: 'row', alignItems: 'center',marginLeft:15, marginRight:15}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                <Text style={{width: 50, textAlign: 'center'}}>lub</Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};
//to do zmiany w przyszlosci do przemyslenia
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100,
  },
});

export default SignupScreen;
