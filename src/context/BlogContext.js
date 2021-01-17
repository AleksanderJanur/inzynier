import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_forms':
      return action.payload;
    default:
      return state;
  }
};

const createForm = dispatch => async (name, subject, prize, maxMember, description, educationLevel, members) => {
  try {
    console.log(name, subject, prize)

    const form = {
      "name":name,
      "subject":subject,
      "prize":prize,
      "maxMember":maxMember,
      "description":description,
      "educationLevel":educationLevel,
      "members":members
    };

    await trackerApi.post('/forms', {form});
    navigate('TrackList');
    console.log("Sukces");
}
catch (err){
    console.log(err.response,"Porazka");
  }
}

const fetchForms = dispatch => async () => {
  const response = await trackerApi.get('/forms');
  dispatch({ type: 'fetch_forms', payload: response.data });
};

export const { Provider, Context } = createDataContext(
  blogReducer,
  { createForm, fetchForms },
  []
);
