import Axios from 'axios';

export const globalFetch = (url, method, data) => {
  switch (method.toLowerCase()) {
    case 'post':
      return Axios.post(url, data);
    default:
      return Axios.get(url);
  }
};
