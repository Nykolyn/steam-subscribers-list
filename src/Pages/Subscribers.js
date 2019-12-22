import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@material-ui/core';

import SteamForm, {
  toastError,
  toastSuccess,
} from '../Components/SteamList/SteamForm';
import SteamList from '../Components/SteamList/SteamList';
import {
  getSubs,
  addSub,
  updateFavSub,
} from '../redux/operations/subscribtionsOperations';
import { authSelector } from '../redux/selectors/authSelectors';
import {
  subsSelector,
  subsLoadSelector,
  addSubLoadSelector,
  updateFavSubLoadSelector,
} from '../redux/selectors/subscribtionSelectors';
/* eslint-disable */

const filterSubs = (arr, query = '') =>
  arr.filter(
    el =>
      el.name.toLowerCase().includes(query.toLowerCase()) ||
      el.userID === query,
  );

class Subscribers extends Component {
  state = {
    query: '',
    showFavorites: false,
    onChangeText: 'Show favourites',
  };

  componentDidMount() {
    const { isAuth, getSubs } = this.props;

    if (!isAuth) return;
    getSubs();
  }

  componentDidUpdate(prevProps) {
    const { isAuth, getSubs } = this.props;

    if (prevProps.isAuth !== isAuth && isAuth) {
      getSubs();
    }
  }

  handleSubmit = sub => {
    const { isAuth, addSub, subs } = this.props;
    if (!isAuth) return;

    const subAlreadyExists = subs.find(
      el =>
        el.name.toLowerCase().trim() === sub.name.toLocaleLowerCase().trim() ||
        el.userID === sub.userID.trim(),
    );

    if (subAlreadyExists) return toastError();

    const subToAdd = {
      favorite: false,
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      ...sub,
    };

    addSub(subToAdd).then(res => {
      if (!res) return;

      toastSuccess(subs.length + 1);
    });
  };

  handleFilterSubs = e => this.setState({ query: e.target.value });

  filterFavorites = () => this.props.subs.filter(el => el.favorite);

  showFavorites = () =>
    this.setState(state => ({
      showFavorites: !state.showFavorites,
      onChangeText: state.showFavorites ? 'Show favourites' : 'Show all',
    }));

  handleFavoriteChange = (id, favorite) => {
    const { updateFavSub } = this.props;
    updateFavSub(id, { favorite: !favorite });
  };

  render() {
    const { query, showFavorites, onChangeText } = this.state;
    const { subs, subsLoad } = this.props;
    const filteredSubs = filterSubs(subs, query);

    return (
      <div>
        <SteamForm
          handleSubmit={this.handleSubmit}
          query={query}
          handleFilterSubs={this.handleFilterSubs}
          showFavorites={this.showFavorites}
          onChangeText={onChangeText}
        />
        {subsLoad ? (
          <CircularProgress
            className="material-subs-loader"
            color="secondary"
          />
        ) : showFavorites ? (
          <>
            <div className="subs-length-wrap">
              <p className="subs-length-text">
                Total length: {this.filterFavorites().length}
              </p>
            </div>
            <SteamList
              subscribers={this.filterFavorites()}
              handleFavChange={this.handleFavoriteChange}
            />
          </>
        ) : (
          <>
            <div className="subs-length-wrap">
              <p className="subs-length-text">
                Total length: {filteredSubs.length}
              </p>
            </div>
            <SteamList
              subscribers={filteredSubs.reverse().slice(0, 20)}
              handleFavChange={this.handleFavoriteChange}
            />
          </>
        )}

        <ToastContainer />
      </div>
    );
  }
}

Subscribers.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  getSubs: PropTypes.func.isRequired,
  addSub: PropTypes.func.isRequired,
  subs: PropTypes.array.isRequired,
  updateFavSub: PropTypes.func.isRequired,
  subsLoad: PropTypes.bool.isRequired,
  addSubLoad: PropTypes.bool.isRequired,
  updFavSubLoad: PropTypes.bool.isRequired,
};

const mapSTP = state => ({
  isAuth: authSelector(state),
  subs: subsSelector(state),
  subsLoad: subsLoadSelector(state),
  addSubLoad: addSubLoadSelector(state),
  updFavSubLoad: updateFavSubLoadSelector(state),
});

const mDTP = {
  getSubs,
  addSub,
  updateFavSub,
};

export default connect(
  mapSTP,
  mDTP,
)(Subscribers);
