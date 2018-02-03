import testFormConfig from './formsConfigs/testFormConfig';

const configs = {
  testForm: testFormConfig
};

const getFormConfigById = id => {
  return configs[id];
};

export default { getFormConfigById };
