import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/css/index.css';

import formsConfigs from './formsConfigs';
import formsComponents from './formsComponents';

const ModalForm = ({ formId }) => {
  const Form = formsComponents.getFormById(formId);
  const config = formsConfigs.getFormConfigById(formId);
  if (!formId) return null;

  return (
    <div className="modal-form-wrapper">
      <Form />
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
  formId: state.modalForm && state.modalForm.formId
}))(ModalForm);

const Modal = () => {
  return ReactDOM.createPortal(
    <ConnectedForm />,
    document.getElementById('modal-root')
  );
};

export default Modal;
