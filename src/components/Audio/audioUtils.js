import politicsTrack from '../../audio/track1.mp3';
import crimeTrack from '../../audio/track3.mp3';
import sportTrack from '../../audio/track4.mp3';

const getAudioTrackProps = topic => {
  const props = {
    loop: true,
    autoPlay: true,
    src: null
  };
  switch (topic) {
    case 'politics':
      props.src = politicsTrack;
      props.volume = 0.5;
      break;
    case 'crime':
      props.src = crimeTrack;
      props.volume = 0.5;
      break;
    case 'sport':
      props.src = sportTrack;
      props.volume = 0.8;
      break;
    default:
  }
  return props;
};

export default {
  getAudioTrackProps
};
