/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { getSubs } from '../../services/subsApi';
import JellyButton from '../JellyButton';
import 'react-toastify/dist/ReactToastify.css';
import Toogle from './Toogle';

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

  success = length =>
    toast.success(`🤟 Sub added! Total ammout:  ${length}`, {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  warn = () =>
    toast.warn('😤😤😤 Fill the field!!!', {
      position: 'top-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  error = () =>
    toast.error('🤪 Sub already exists', {
      position: 'top-center',
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
    getSubs().then(data => {
      if (name === '') return this.warn();
      const subAlreadyExists = data.find(
        el =>
          el.name.toLowerCase().trim() === name.toLocaleLowerCase().trim() ||
          el.userID === userID,
      );
      if (subAlreadyExists) return this.error();
      this.success(data.length + 1);
      this.props.handleSubmit(this.state);
      return this.setState({ name: '', userID: '' });
    });
  };

  render() {
    const { name, userID } = this.state;
    const { handleFilterSubs, query, showFavorites, onChangeText } = this.props;
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
          placeholder="User id (optional)"
        />
        <JellyButton text="Add new sub" type="submit" />
        <input
          type="text"
          autoComplete="off"
          value={query}
          placeholder={'filter sub here'}
          name="query"
          onChange={handleFilterSubs}
          className="sub-form__input"
        />
        {/* <button type="button" onClick={() => showFavorites()}>
          {onChangeText}
        </button> */}
        <JellyButton
          text={onChangeText}
          type="button"
          onClick={() => showFavorites()}
        />
        {/* <Toogle handleFav={() => showFavorites()} /> */}
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

export default SteamForm;
