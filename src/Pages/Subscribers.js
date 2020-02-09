import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { Pagination } from 'antd';
import 'react-toastify/dist/ReactToastify.css';

import SteamForm, {
  toastError,
  toastSuccess,
} from '../Components/SteamList/SteamForm';
import SteamList from '../Components/SteamList/SteamList';
import { getSubs, addSub } from '../redux/operations/subscribtionsOperations';
import { authSelector, idSelector } from '../redux/selectors/authSelectors';
import {
  subsSelector,
  subsLoadSelector,
  addSubLoadSelector,
} from '../redux/selectors/subscribtionSelectors';
import { START_PAGE, PER_PAGE_SUCBSCRIPTIONS_LIST } from '../helpers/constants';
// import Pagination from '../Components/SteamList/Pagination';
import SubsInfo from '../Components/SteamList/SubsInfo';

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
    const { query } = this.state;
    const { subs } = this.props;

    if (prevProps.subs !== subs && query) {
      console.log('works');
    }

    if (prevState.query !== query) {
      this.handleChangePageOnFilter();
    }
  }

  resetFilter = () => this.setState({ query: '' });

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
        if (!res) return toastError();

        return toastSuccess(subs.length + 1);
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
    this.setState({
      currentPage: name,
    });
  };

  renderPaginationList = () => {
    const { currentPage, perPage } = this.state;
    const list = [...this.renderSubsList().reverse()];

    const indexOfLastSub = currentPage * perPage;
    const indexOfFirstSub = indexOfLastSub - perPage;
    return list.slice(indexOfFirstSub, indexOfLastSub);
  };

  render() {
    const { query, onChangeText, perPage } = this.state;
    const { subsLoad } = this.props;
    return (
      <Content>
        {subsLoad && <div className="rainbow-marker-loader" />}

        <Form>
          <SteamForm
            handleSubmit={this.handleSubmit}
            query={query}
            handleFilterSubs={this.handleFilterSubs}
            showFavorites={this.showFavorites}
            onChangeText={onChangeText}
            onReset={this.resetFilter}
          />

          <SubsInfo showTotalAmmountOfSubs={this.showTotalAmmountOfSubs()} />
        </Form>
        <List>
          <SteamList subscribers={this.renderPaginationList()} />

          {this.renderSubsList().length > 0 && (
            <PaginationBlock>
              <Pagination
                showQuickJumper
                defaultCurrent={1}
                defaultPageSize={perPage}
                total={this.renderSubsList().length}
                onChange={this.handleChangePage}
              />
            </PaginationBlock>
          )}
          <ToastContainer />
        </List>
      </Content>
    );
  }
}

const PaginationBlock = styled.div`
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
`;

const Form = styled.div`
  width: 30%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  position: relative;
  width: 60%;
`;

Subscribers.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  getSubs: PropTypes.func.isRequired,
  addSub: PropTypes.func.isRequired,
  subs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  subsLoad: PropTypes.bool.isRequired,
  ownerId: PropTypes.string.isRequired,
};

const mapSTP = state => ({
  isAuth: authSelector(state),
  subs: subsSelector(state),
  subsLoad: subsLoadSelector(state),
  addSubLoad: addSubLoadSelector(state),
  ownerId: idSelector(state),
});

const mDTP = {
  getSubs,
  addSub,
};

export default connect(
  mapSTP,
  mDTP,
)(Subscribers);
