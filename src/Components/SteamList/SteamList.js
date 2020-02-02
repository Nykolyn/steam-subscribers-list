import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import SteamItem from './SteamItem';
import { addSubLoadSelector } from '../../redux/selectors/subscribtionSelectors';

const SteamList = ({ subscribers, addSubLoading }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (addSubLoading) {
      return setLoading(true);
    }

    return setLoading(false);
  }, [addSubLoading]);

  return (
    <ul className="subs-list container">
      {loading && (
        <li className="subs-list__item--loader">
          <CircularProgress />
        </li>
      )}
      {subscribers.map(sub => (
        <li key={sub.userID} className="subs-list__item">
          <SteamItem {...sub} />
        </li>
      ))}
    </ul>
  );
};

SteamList.propTypes = {
  subscribers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  addSubLoading: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  addSubLoading: addSubLoadSelector(state),
});

export default connect(mSTP)(SteamList);
