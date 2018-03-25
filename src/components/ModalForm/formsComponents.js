import MobileWarningForm from './Forms/MobileWarningForm';
import NewsDescriptionForm from './Forms/NewsDescriptionForm';
import ContactsForm from './Forms/ContactsForm';
import ApiError from './Forms/ApiError';

const forms = {
  mobileWarning: MobileWarningForm,
  newsDescription: NewsDescriptionForm,
  contacts: ContactsForm,
  apiError: ApiError
};

const getFormById = id => {
  return forms[id];
};

export default { getFormById };
