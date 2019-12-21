import Loader from 'react-loader-spinner';
import React from 'react';

const MyLoader = () => (
  <div
    style={{
      width: '100vw',
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Loader type="Triangle" color="gold" height="200" width="200" />
  </div>
);

export default MyLoader;
