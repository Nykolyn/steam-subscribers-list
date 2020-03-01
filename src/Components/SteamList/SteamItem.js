import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

import { updateFavSub } from '../../redux/operations/subscribtionsOperations';
import { timeAgo } from '../../helpers/dateDiff';

const SteamItem = ({ _id: id, name, date, favorite, updateFavSub }) => {
  const [loading, setLoading] = useState(false);

  const handleUpdateFavSub = async () => {
    setLoading(true);

    await updateFavSub(id, { favorite: !favorite });

    setTimeout(async () => {
      setLoading(false);
    }, 1000);
  };

  return (
    <tr className="subs-row">
      <td className="subs-row__item item_name">{name}</td>
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

  // return (
  //   <>
  //     <div>
  //       <h2>{name}</h2>
  //       <p className="item-date">Added: {`${timeAgo(date)}, ${date}`}</p>
  //     </div>
  //     <button
  //       className="image-wrapper"
  //       type="button"
  //       onClick={() => handleUpdateFavSub()}
  //     >
  //       {loading ? (
  //         <ClipLoader color="#fff" loading={loading} />
  //       ) : (
  //         <img
  //           className="item-image"
  //           src={
  //             favorite
  //               ? 'https://image.flaticon.com/icons/svg/148/148838.svg'
  //               : 'https://image.flaticon.com/icons/svg/149/149219.svg'
  //           }
  //           alt="fav"
  //         />
  //       )}
  //     </button>
  //   </>
  // );
};

SteamItem.defaultProps = {
  favorite: false,
};

SteamItem.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  updateFavSub: PropTypes.func.isRequired,
};

const mDTP = {
  updateFavSub,
};

export default connect(
  null,
  mDTP,
)(SteamItem);
