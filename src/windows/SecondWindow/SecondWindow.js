import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '../../components/Background/Background';

const SecondWindow = ({ topic }) => {
  if (topic) {
    return (
      <section className="second-window fadeIn">
        <Background topic={topic} />
      </section>
    );
  }
  return null;
};

SecondWindow.propTypes = {
  topic: PropTypes.string
};

SecondWindow.defaultProps = {
  topic: null
};

export default connect(state => ({ topic: state.topic }))(SecondWindow);
