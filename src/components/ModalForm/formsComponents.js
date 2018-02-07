import TestForm from './Forms/TestForm';
import MobileWarningForm from './Forms/MobileWarningForm';

const forms = {
  testForm: TestForm,
  mobileWarning: MobileWarningForm
};

const getFormById = id => {
  return forms[id];
};

export default { getFormById };
