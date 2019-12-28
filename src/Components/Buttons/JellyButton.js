import React from 'react';
import PropTypes from 'prop-types';

const JellyButton = ({ text, onClick, type, loading }) => (
  <button type={type} className="jelly-button" onClick={onClick}>
    {loading ? (
      <p className="super-slide">Loading...</p>
    ) : (
      <p className="super-slide">{text}</p>
    )}
  </button>
);

JellyButton.defaultProps = {
  onClick: null,
  loading: false,
};

JellyButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

export default JellyButton;
