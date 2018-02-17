import SpeechApi from '../utils/SpeechApi';

const speak = argsObj => {
  const {
    text = '',
    voice = 'Russian Female',
    callback,
    rate = 0.85,
    pitch = 1.4,
    volume = 1
  } = argsObj;
  const apiOrgs = {
    rate,
    pitch,
    volume,
    onend: () => {
      if (typeof callback === 'function') {
        setTimeout(callback, 2000);
      }
    }
  };
  SpeechApi.speak(text, voice, apiOrgs);
};

export default { speak };
