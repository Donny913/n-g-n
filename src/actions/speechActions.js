import SpeechApi from '../utils/SpeechApi';
import standUtils from '../utils/standUtils';
import httpActions from './httpActions';
import formsActions from './formsActions';

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

const pause = () => SpeechApi.pause();

const resume = () => {
  SpeechApi.resume();
};

const cancel = () => SpeechApi.cancel();

const isPlaying = () => SpeechApi.isPlaying();

const getAudioSpeechUrl = text => {
  const url = `${standUtils.getApiPath()}/get_audio?text=${encodeURIComponent(
    text
  )}`;
  return url;
};

const getAudioSpeechPath = async text => {
  try {
    const result = await httpActions.get(getAudioSpeechUrl(text));
    return result.data.fileName;
  } catch (error) {
    formsActions.initErrorForm();
  }
  return false;
};

const getAudioSpeechPathTEST = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('static/media/politics.2addae02.wav');
    });
  });
};

export default {
  speak,
  pause,
  resume,
  cancel,
  isPlaying,
  getAudioSpeechPath,
  getAudioSpeechPathTEST
};
