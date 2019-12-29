import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SteamItem from './SteamItem';
/* eslint-disable */

const SteamList = ({ subscribers }) => (
  <ul className="subs-list container">
    <TransitionGroup className="subs-list container">
      {subscribers.map(sub => (
        <CSSTransition key={sub._id} timeout={500} classNames="bounce">
          <li className="subs-list__item">
            <SteamItem {...sub} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </ul>
);

SteamList.propTypes = {
  subscribers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default SteamList;
