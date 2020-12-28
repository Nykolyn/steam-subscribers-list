/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, LinearProgress } from '@material-ui/core';

import { addSubLoadSelector } from '../../redux/selectors/subscribtionSelectors';

export const toastError = () =>
  toast.error('🤪 Sub already exists', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

export const toastSuccess = length =>
  toast.success(`🤟 Sub added! Total ammout:  ${length}`, {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

class SteamForm extends Component {
  filterClearTimeout;

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleFilterSubs: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    showFavorites: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    userID: '',
    focused: false,
    progress: 10,
  };

  warn = text =>
    toast.warn(`😤😤😤 ${text ? text : 'Fill the field!!!'} `, {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  handleInputChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleFormSubmit = e => {
    e.preventDefault();
    const { name, userID } = this.state;
    const trimmedName = name.trim();
    const trimmedUserId = userID.trim();

    if (trimmedName === '' || trimmedUserId === '') {
      this.warn();
      return;
    }

    if (userID.includes('/')) return this.warn('Forgot to remove "/" ');
    this.props.handleSubmit({ name: trimmedName, userID: trimmedUserId });
    return this.setState({ name: '', userID: '' });
  };

  render() {
    const { name, userID } = this.state;
    const {
      handleFilterSubs,
      query,
      showFavorites,
      onChangeText,
      loading,
    } = this.props;
    return (
      <form onSubmit={this.handleFormSubmit} className="sub-form">
        <input
          type="text"
          autoComplete="off"
          value={name}
          name="name"
          onChange={this.handleInputChange}
          className="sub-form__input"
          placeholder="Add sub here"
        />
        <input
          type="text"
          autoComplete="off"
          value={userID}
          name="userID"
          onChange={this.handleInputChange}
          className="sub-form__input"
          placeholder="User id"
        />
        <input
          type="text"
          autoComplete="off"
          value={query}
          onFocus={() => {
            this.setState({ progress: 10 });
            clearTimeout(this.filterClearTimeout);
          }}
          onBlur={() => {
            this.filterClearTimeout = setInterval(async () => {
              if (!this.state.progress) {
                this.props.onReset();
                this.setState({ progress: 10 });
                clearTimeout(this.filterClearTimeout);
                return;
              }

              await this.setState(state => ({ progress: state.progress - 1 }));
            }, 1000);
          }}
          autoFocus
          placeholder={'filter sub here'}
          name="query"
          onChange={handleFilterSubs}
          className="sub-form__input sub-form__filter-input"
        />
        <Box width="100%" mb="10px">
          <LinearProgress
            variant="determinate"
            value={this.state.progress * 10}
          />
        </Box>
        <div className="multi-button">
          <button type="submit">{loading ? 'Loading...' : 'Add'}</button>
          <button
            text={onChangeText}
            type="button"
            onClick={() => showFavorites()}
          >
            {onChangeText}
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </form>
    );
  }
}

SteamForm.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  loading: addSubLoadSelector(state),
});

export default connect(mSTP)(SteamForm);
