import SpeechApi from '../utils/SpeechApi';
// import SpeechApi from '../utils/responsivevoice';

const speak = (
  { text, voice, params, callback } = {
    text: '',
    voice: 'Russian Female',
    params: {
      rate: 0.85,
      pitch: 1.4,
      volume: 1,
      onend: () => {
        if (typeof callback === 'function') {
          setTimeout(callback, 2000);
        }
      }
    }
  }
) => {
  SpeechApi.speak('hello world');
};

export default { speak };
