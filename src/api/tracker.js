import axios from 'axios';

export default axios.create({
  //jak za darmo co 8 godzin trzeba geneorowac nowy link
  baseURL: 'http://68859b65cf5b.ngrok.io'
});
