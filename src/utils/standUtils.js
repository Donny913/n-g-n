const getBasePath = () => {
  const { protocol, host } = window.location;
  if (process.env.NODE_ENV === 'production') {
    return `${protocol}//${host}`;
  }
  return `${protocol}//localhost:1337`;
};

const getApiPath = () => {
  return '/api';
};

export default {
  getBasePath,
  getApiPath
};
