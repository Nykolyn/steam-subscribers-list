import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@material-ui/core';

import SteamForm from '../Components/SteamList/SteamForm';
import SteamList from '../Components/SteamList/SteamList';
import { getSubs, postSub, updateFav } from '../services/subsApi';
import authSelector from '../redux/selectors/authSelectors';
/* eslint-disable */

const filterSubs = (arr, query = '') =>
  arr.filter(
    el =>
      el.name.toLowerCase().includes(query.toLowerCase()) ||
      el.userID === query,
  );

class Subscribers extends Component {
  state = {
    subs: [],
    query: '',
    showFavorites: false,
    onChangeText: 'Show favourites',
    loadingSubs: false,
  };

  componentDidMount() {
    const { isAuth } = this.props;

    if (!isAuth) return;
    getSubs().then(data => this.setState({ subs: data }));
  }

  async componentDidUpdate(prevProps) {
    const { isAuth } = this.props;

    if (prevProps.isAuth !== isAuth && isAuth) {
      await this.setState({ loadingSubs: true });
      getSubs().then(data => {
        this.setState({ subs: data, loadingSubs: false });
      });
    }
  }

  handleSubmit = sub => {
    const { isAuth } = this.props;
    if (!isAuth) return;

    const subToAdd = {
      favorite: false,
      date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      ...sub,
    };

    postSub(subToAdd).then(addedTask =>
      this.setState(state => ({ subs: [...state.subs, addedTask] })),
    );
  };

  handleFilterSubs = e => this.setState({ query: e.target.value });

  filterFavorites = () => this.state.subs.filter(el => el.favorite);

  showFavorites = () =>
    this.setState(state => ({
      showFavorites: !state.showFavorites,
      onChangeText: state.showFavorites ? 'Show favourites' : 'Show all',
    }));

  handleFavoriteChange = (id, favorite) => {
    updateFav(id, { favorite: !favorite }).then(updatedFav => {
      this.setState(
        state => ({
          subs: state.subs.map(sub => (sub._id === id ? updatedFav : sub)),
        }),
        () => {
          if (favorite === false) toast.success('Added to favorites');
          if (favorite === true) toast.success('Removed from favorites');
        },
      );
    });
  };

  render() {
    const {
      subs,
      query,
      showFavorites,
      onChangeText,
      loadingSubs,
    } = this.state;
    const filteredSubs = filterSubs(subs, query);

    return (
      <div className="stars-back">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <SteamForm
          handleSubmit={this.handleSubmit}
          query={query}
          handleFilterSubs={this.handleFilterSubs}
          showFavorites={this.showFavorites}
          onChangeText={onChangeText}
        />
        {loadingSubs ? (
          <CircularProgress className="material-loader" color="secondary" />
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
};

const mapSTP = state => ({
  isAuth: authSelector(state),
});

export default connect(mapSTP)(Subscribers);
