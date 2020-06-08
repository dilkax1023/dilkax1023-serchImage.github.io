import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID tiqxPhegjS8R2u88HZzSYbDgFyETgisCHHXUJ_LrxEo',
  },
});
