/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  filterClearTimeout;

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
          onFocus={() => clearTimeout(this.filterClearTimeout)}
          onBlur={() => {
            this.filterClearTimeout = setTimeout(() => {
              this.props.onReset();
            }, 10000);
          }}
          autoFocus
          placeholder={'filter sub here'}
          name="query"
          onChange={handleFilterSubs}
          className="sub-form__input"
        />
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
