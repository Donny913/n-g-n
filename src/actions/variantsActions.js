import { dispatch } from '../store/store';
import STORE_CONSTANTS from '../constants/storeConstants';

const chooseVariant = async id => {
  dispatch({ type: STORE_CONSTANTS.CHANGE_TOPIC, topic: id });
};

export default { chooseVariant };
