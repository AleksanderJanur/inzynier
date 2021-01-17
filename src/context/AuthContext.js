import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload,};
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    case 'getUser':
      return {errorMessage: '', token: action.payload}
    default:
      return state;
  }
};


const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('Signup');
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = dispatch => async ({ email, password, role }) => {
  try {
    const aboutMe = null;
    const contact = null;
    const myName = null;
    const educationLevel = null;
    const response = await trackerApi.post('/signup', { email, password, role,aboutMe,contact, myName,educationLevel });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up'
    });
  }
};

const signin = dispatch => async ({ email, password, role }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password, role });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
    //mozna dac jakiegos toasta
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in'
    });
  }
};

const signout = dispatch => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({ type: 'signout' });
  navigate('loginFlow');
};
const fetchUser = dispatch => async () => {
  const response = await trackerApi.get('/getUser');
  console.log(response.data + "twww");
  dispatch({ type: 'getUser', payload: response.data });
};
const updateUser = dispatch => async (field,item) => {
  const myJson = {
  [field]:item
  }
  console.log(myJson,"dupa");
  await trackerApi.post('/updateUser',myJson);
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin, fetchUser,updateUser },
  { token: null, errorMessage: '' }
);
