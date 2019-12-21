import React from 'react';
import PropTypes from 'prop-types';

const JellyButton = ({ text, onClick, type }) => (
  <button type={type} className="jelly-button" onClick={onClick}>
    <p className="super-slide">{text}</p>
  </button>
);

JellyButton.defaultProps = {
  onClick: null,
};

JellyButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default JellyButton;
