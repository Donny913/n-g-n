import mobileWarningFormConfig from './formsConfigs/mobileWarningFormConfig';
import newsDescriptionFormConfig from './formsConfigs/newsDescriptionFormConfig';
import contactsFormConfig from './formsConfigs/contactsFormConfig';

const configs = {
  mobileWarning: mobileWarningFormConfig,
  newsDescription: newsDescriptionFormConfig,
  contacts: contactsFormConfig
};

const getFormConfigById = id => {
  return configs[id];
};

export default { getFormConfigById };
