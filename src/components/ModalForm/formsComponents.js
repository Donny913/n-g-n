import MobileWarningForm from './Forms/MobileWarningForm';
import NewsDescriptionForm from './Forms/NewsDescriptionForm';

const forms = {
  mobileWarning: MobileWarningForm,
  newsDescription: NewsDescriptionForm
};

const getFormById = id => {
  return forms[id];
};

export default { getFormById };
