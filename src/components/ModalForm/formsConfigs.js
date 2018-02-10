import mobileWarningFormConfig from './formsConfigs/mobileWarningFormConfig';
import newsDescriptionFormConfig from './formsConfigs/newsDescriptionFormConfig';

const configs = {
  mobileWarning: mobileWarningFormConfig,
  newsDescription: newsDescriptionFormConfig
};

const getFormConfigById = id => {
  return configs[id];
};

export default { getFormConfigById };
