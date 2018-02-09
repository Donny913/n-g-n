import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ onClick }) => (
  <div className="footer">
    <p className="contacts">Contacts</p>
  </div>
);

Footer.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Footer;
