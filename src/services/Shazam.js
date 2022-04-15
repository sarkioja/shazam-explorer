import axios from 'axios';

//const API_KEY = process.env.VUE_RAPIDAPI_SHAZAM

const options = {
  api: 'https://shazam.p.rapidapi.com/search',
  params: {locale: 'en-US', offset: '0', limit: '5'},
  headers: {
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
    'X-RapidAPI-Key': '5f8ca44399msha91c704d8d6931dp11ec61jsn90cb3732c656'
    //'X-RapidAPI-Key': API_KEY
  }
};

export default {
  getResults(searchParam) {
    return axios.get(options.api + '?locale=en-US&offset=0&limit=5&term=' + searchParam, { 
      headers: options.headers
    })
      .then((response) => {
        return response.data;
      })
  }, 
};