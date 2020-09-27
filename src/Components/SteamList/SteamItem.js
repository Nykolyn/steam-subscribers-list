import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { updateSub } from '../../redux/operations/subscribtionsOperations';
import { timeAgo } from '../../helpers/dateDiff';

const SteamItem = ({ _id, name, date, visitedAt, favorite, updateSub }) => {
  const [loading, setLoading] = useState(false);
  const [loadingVisitedAt, setLoadingVisitedAt] = useState(false);

  const handleUpdateFavSub = async () => {
    setLoading(true);

    await updateSub({ _id, favorite: !favorite });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleUpdateVisitedAt = async () => {
    setLoadingVisitedAt(true);

    await updateSub({
      _id,
      visitedAt: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
    });

    setLoadingVisitedAt(false);
  };

  return (
    <tr className="subs-row">
      <td className="subs-row__item item_name">{name}</td>
      <td className="subs-row__item item_date_visited">
        {visitedAt ? (
          <>
            {timeAgo(visitedAt)}
            <IconButton
              disabled={loadingVisitedAt}
              onClick={handleUpdateVisitedAt}
            >
              <RefreshIcon style={{ color: 'white' }} />
            </IconButton>
          </>
        ) : (
          <>
            - ,
            <IconButton
              disabled={loadingVisitedAt}
              onClick={handleUpdateVisitedAt}
            >
              <RefreshIcon style={{ color: 'white' }} />
            </IconButton>
          </>
        )}
      </td>
      <td className="subs-row__item item_date_added">
        {`${timeAgo(date)}, ${date}`}
      </td>
      <td className="subs-row__item item_favorite">
        <button
          type="button"
          className="image-wrapper"
          onClick={() => handleUpdateFavSub()}
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
      </td>
    </tr>
  );
};

SteamItem.defaultProps = {
  favorite: false,
};

SteamItem.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  updateSub: PropTypes.func.isRequired,
};

const mDTP = {
  updateSub,
};

export default connect(
  null,
  mDTP,
)(SteamItem);
