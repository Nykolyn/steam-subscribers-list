import React from 'react';
import PropTypes from 'prop-types';

const Toogle = ({ handleFav }) => (
  <>
    <input
      type="checkbox"
      id="toggle"
      name="toggle"
      value="is_on"
      className="cool-togle"
      onChange={handleFav}
    />
    <label htmlFor="toggle" className="toy-toggle">
      <div className="border1" />
      <div className="border2" />
      <div className="border3" />
      <div className="handle">
        <div className="handle-off" />
        <div className="handle-on" />
      </div>
    </label>
  </>
);

Toogle.propTypes = {
  handleFav: PropTypes.func.isRequired,
};

export default Toogle;
