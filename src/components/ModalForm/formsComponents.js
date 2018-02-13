import MobileWarningForm from './Forms/MobileWarningForm';
import NewsDescriptionForm from './Forms/NewsDescriptionForm';
import ContactsForm from './Forms/ContactsForm';

const forms = {
  mobileWarning: MobileWarningForm,
  newsDescription: NewsDescriptionForm,
  contacts: ContactsForm
};

const getFormById = id => {
  return forms[id];
};

export default { getFormById };
