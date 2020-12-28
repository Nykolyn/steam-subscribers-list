import React, { useState } from 'react';
import { Box, IconButton, TextField, Typography } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { Tooltip } from 'antd';
import moment from 'moment';

import { updateSub } from '../../redux/operations/subscribtionsOperations';
import { timeAgo } from '../../helpers/dateDiff';

const CustomTextField = withStyles({
  root: {
    '& input.MuiInput-input': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
  },
})(TextField);

const SteamItem = ({
  _id,
  name,
  date,
  visitedAt,
  favorite,
  updateSub,
  userID,
}) => {
  const [loading, setLoading] = useState(false);
  const [changeName, setChangeName] = useState(false);
  const [newName, setNewName] = useState('');
  const [loadingVisitedAt, setLoadingVisitedAt] = useState(false);
  const [loadingChangeName, setLoadingChangeName] = useState(false);

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

  const handleUpdateName = async () => {
    if (!newName.trim().length) return;
    setLoadingChangeName(true);

    await updateSub({
      _id,
      name: newName.trim(),
    });

    setLoadingChangeName(false);
    setChangeName(false);
  };

  return (
    <tr className={`subs-row ${!userID ? 'no-id-row' : null}`}>
      <Tooltip title={userID} color="#fff">
        <td className="subs-row__item item_name">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            {changeName ? (
              <>
                <CustomTextField
                  onChange={({ target: { value } }) => setNewName(value)}
                />
                <IconButton
                  disabled={loadingChangeName}
                  onClick={handleUpdateName}
                >
                  <CheckIcon style={{ color: 'white', fontSize: '16px' }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    setNewName('');
                    setChangeName(false);
                  }}
                >
                  <CloseIcon style={{ color: 'white', fontSize: '16px' }} />
                </IconButton>
              </>
            ) : (
              <>
                <Typography>{name}</Typography>
                <IconButton onClick={() => setChangeName(true)}>
                  <CreateIcon style={{ color: 'white', fontSize: '16px' }} />
                </IconButton>
              </>
            )}
          </Box>
        </td>
      </Tooltip>
      <td className="subs-row__item item_date_visited">
        {visitedAt ? (
          <>
            {`${timeAgo(visitedAt)}, ${moment(
              visitedAt.split(' ')[0],
              moment.defaultFormat,
            ).format('D MMM YYYY')}`}
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
