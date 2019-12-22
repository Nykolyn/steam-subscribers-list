import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

/* eslint-disable */
const SteamItem = ({ _id: id, name, date, favorite, handleFavChange }) => {
  const [loading, setLoading] = useState(false);

  const handleLoading = async () => {
    setLoading(true);
    await handleFavChange(id, favorite);
    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div>
        <h2>{name}</h2>
        <p className="item-date">Added at: {date}</p>
      </div>
      <button
        className="image-wrapper"
        type="button"
        onClick={() => {
          handleLoading();
        }}
      >
        {loading ? (
          <ClipLoader color="#fff" loading={loading} />
        ) : (
          <img
            className="item-image"
            src={
              favorite
                ? 'https://image.flaticon.com/icons/svg/148/148838.svg'
                : 'https://image.flaticon.com/icons/svg/149/149219.svg'
            }
            alt="fav"
          />
        )}
      </button>
    </>
  );
};

SteamItem.defaultProps = {
  favorite: false,
};

SteamItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  handleFavChange: PropTypes.func.isRequired,
};

export default SteamItem;
