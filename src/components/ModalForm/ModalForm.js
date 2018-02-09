import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/css/index.css';

import formsConfigs from './formsConfigs';
import formsComponents from './formsComponents';
import formsActions from '../../actions/formsActions';

const ModalForm = ({ formId }) => {
  const Form = formsComponents.getFormById(formId);
  const config = formsConfigs.getFormConfigById(formId);
  if (!formId) return null;

  const closeForm = () => {
    formsActions.closeForm(formId);
  };

  return (
    <div className="fadeIn modal-form-wrapper">
      <Form closeForm={closeForm} />
    </div>
  );
};

ModalForm.propTypes = {
  formId: PropTypes.string
};

ModalForm.defaultProps = {
  formId: null
};

const ConnectedForm = connect(state => ({
  formId: state.forms && state.forms.formId
}))(ModalForm);

const Modal = () => {
  return ReactDOM.createPortal(
    <ConnectedForm />,
    document.getElementById('modal-root')
  );
};

export default Modal;
