/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import JellyButton from '../Buttons/JellyButton';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
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
    if (name.trim() === '' || userID.trim() === '') return this.warn();
    if (userID.includes('/')) return this.warn('Forgot to remove "/" ');
    this.props.handleSubmit(this.state);
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
      onReset,
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
          onBlur={() => onReset()}
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
        {/* <ButtonWrapper>
          <JellyButton text="Add new sub" loading={loading} type="submit" />
          <JellyButton
            text={onChangeText}
            type="button"
            onClick={() => showFavorites()}
          />
        </ButtonWrapper> */}
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

SteamForm.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  loading: addSubLoadSelector(state),
});

export default connect(mSTP)(SteamForm);
