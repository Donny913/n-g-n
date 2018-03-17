import axios from 'axios';

const get = async url => {
  try {
    const result = axios.get(url);
    return result;
  } catch (error) {
    throw error;
  }
};


export default { get };
