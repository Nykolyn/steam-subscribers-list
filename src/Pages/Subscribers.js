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
import { authSelector, idSelector } from '../redux/selectors/authSelectors';
import {
  subsSelector,
  subsLoadSelector,
  addSubLoadSelector,
  updateFavSubLoadSelector,
} from '../redux/selectors/subscribtionSelectors';
import { START_PAGE, PER_PAGE_SUCBSCRIPTIONS_LIST } from '../helpers/constants';
import Pagination from '../Components/SteamList/Pagination';

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
    perPage: PER_PAGE_SUCBSCRIPTIONS_LIST,
    currentPage: START_PAGE,
  };

  componentDidMount() {
    const { isAuth, getSubs, ownerId } = this.props;
    if (!isAuth) return;
    getSubs(ownerId);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isAuth, getSubs, ownerId } = this.props;
    const { query } = this.state;

    if (prevProps.isAuth !== isAuth && isAuth) {
      getSubs(ownerId);
    }

    if (prevState.query !== query) {
      this.handleChangePageOnFilter();
    }
  }

  handleChangePageOnFilter = () => {
    const { currentPage } = this.state;
    if (currentPage > this.maxPage()) {
      this.setState({ currentPage: this.maxPage() });
    }
    if (currentPage < 1) {
      this.setState({ currentPage: 1 });
    }
  };

  maxPage = () => {
    return Math.ceil(
      this.renderSubsList().length / PER_PAGE_SUCBSCRIPTIONS_LIST,
    );
  };

  handleSubmit = sub => {
    const { isAuth, addSub, subs, ownerId } = this.props;
    if (!isAuth) return;
    console.log(ownerId);
    const subAlreadyExists = subs.find(
      el =>
        el.name.toLowerCase().trim() === sub.name.toLocaleLowerCase().trim() ||
        el.userID === sub.userID.trim(),
    );

    if (subAlreadyExists) {
      toastError();
    } else {
      const subToAdd = {
        favorite: false,
        date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
        ...sub,
        ownerId,
      };

      addSub(subToAdd).then(res => {
        if (!res) return;

        toastSuccess(subs.length + 1);
      });
    }
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

  filteredSubs = (subs, query) => filterSubs(subs, query);

  showTotalAmmountOfSubs = () => {
    const { subs } = this.props;
    const { showFavorites, query } = this.state;

    return showFavorites
      ? this.filteredSubs(this.filterFavorites(), query).length
      : this.filteredSubs(subs, query).length;
  };

  renderSubsList = () => {
    const { subs } = this.props;
    const { showFavorites, query } = this.state;

    return showFavorites
      ? this.filteredSubs(this.filterFavorites(), query)
      : this.filteredSubs(subs, query);
  };

  handleChangePage = name => {
    this.setState(state => ({
      currentPage:
        name === 'next' ? state.currentPage + 1 : state.currentPage - 1,
    }));
  };

  renderPaginationList = () => {
    const { currentPage, perPage } = this.state;
    const list = [...this.renderSubsList().reverse()];

    const indexOfLastSub = currentPage * perPage;
    const indexOfFirstSub = indexOfLastSub - perPage;
    return list.slice(indexOfFirstSub, indexOfLastSub);
  };

  render() {
    const { query, onChangeText, currentPage } = this.state;
    const { subsLoad } = this.props;

    return (
      <div>
        {subsLoad && (
          <CircularProgress
            className="material-subs-loader"
            color="secondary"
          />
        )}

        <SteamForm
          handleSubmit={this.handleSubmit}
          query={query}
          handleFilterSubs={this.handleFilterSubs}
          showFavorites={this.showFavorites}
          onChangeText={onChangeText}
        />

        <div className="subs-length-wrap">
          <p className="subs-length-text">
            Total length: {this.showTotalAmmountOfSubs()}
          </p>
        </div>
        <SteamList
          subscribers={this.renderPaginationList()}
          handleFavChange={this.handleFavoriteChange}
        />

        {this.renderSubsList().length > 20 && (
          <Pagination
            currentPage={currentPage}
            maxPage={this.maxPage}
            handleChangePage={this.handleChangePage}
          />
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
  subs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  updateFavSub: PropTypes.func.isRequired,
  subsLoad: PropTypes.bool.isRequired,
  ownerId: PropTypes.string.isRequired,
};

const mapSTP = state => ({
  isAuth: authSelector(state),
  subs: subsSelector(state),
  subsLoad: subsLoadSelector(state),
  addSubLoad: addSubLoadSelector(state),
  updFavSubLoad: updateFavSubLoadSelector(state),
  ownerId: idSelector(state),
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
