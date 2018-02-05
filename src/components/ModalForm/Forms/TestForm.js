import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TestForm = ({ CloseIcon }) => {
  return (
    <div className="fadeIn test-form">
      <CloseIcon />hello test form
    </div>
  );
};

TestForm.propTypes = {
  CloseIcon: PropTypes.func.isRequired
};

export default TestForm;
