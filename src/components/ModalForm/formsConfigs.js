import mobileWarningFormConfig from './formsConfigs/mobileWarningFormConfig';
import newsDescriptionFormConfig from './formsConfigs/newsDescriptionFormConfig';
import contactsFormConfig from './formsConfigs/contactsFormConfig';
import apiErrorFormConfig from './formsConfigs/apiErrorFormConfig';

const configs = {
  mobileWarning: mobileWarningFormConfig,
  newsDescription: newsDescriptionFormConfig,
  contacts: contactsFormConfig,
  apiError: apiErrorFormConfig,
};

const getFormConfigById = id => {
  return configs[id];
};

export default { getFormConfigById };
