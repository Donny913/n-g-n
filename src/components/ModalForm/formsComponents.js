import TestForm from './Forms/TestForm';

const forms = {
  testForm: TestForm
};

const getFormById = id => {
  return forms[id];
};

export default { getFormById };
