import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TestForm = ({ CloseIcon }) => {
  return (
    <div className="fadeIn test-form">
      <CloseIcon />
      <div className="dick">hello test form</div>
    </div>
  );
};

TestForm.propTypes = {
  CloseIcon: PropTypes.func.isRequired
};

export default TestForm;
