import { dispatch } from '../store/store';
import CONSTANTS from '../constants/storeConstants';

const chooseVariant = async id => {
  dispatch({ type: CONSTANTS.CHANGE_TOPIC, topic: id });
};

export default { chooseVariant };
