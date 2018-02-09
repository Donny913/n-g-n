import TestForm from './Forms/TestForm';
import MobileWarningForm from './Forms/MobileWarningForm';
import NewsDescriptionForm from './Forms/NewsDescriptionForm';

const forms = {
  testForm: TestForm,
  mobileWarning: MobileWarningForm,
  newsDescription: NewsDescriptionForm
};

const getFormById = id => {
  return forms[id];
};

export default { getFormById };
