import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { authSelector } from '../redux/selectors/authSelectors';

const AuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    static propTypes = {
      authentificated: PropTypes.bool.isRequired,
      history: ReactRouterPropTypes.history.isRequired,
      location: ReactRouterPropTypes.location.isRequired,
    };

    componentDidMount() {
      const { authentificated, history } = this.props;
      if (!authentificated) return;

      history.replace('/subscribtions');
    }

    componentDidUpdate() {
      const { authentificated, location, history } = this.props;
      if (!authentificated) return;
      if (location.state && location.state.from) {
        history.replace(location.state.from);
      } else {
        history.replace('/subscribtions');
      }
    }

    render() {
      return <BaseComponent />;
    }
  }

  const mSTP = state => ({ authentificated: authSelector(state) });

  return connect(mSTP)(WithAuthRedirect);
};

export default AuthRedirect;
