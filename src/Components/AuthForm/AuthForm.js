import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import ValidationHelper from '../../helpers/ValidationHelper';
import Copyright from '../Copyright/Copyright';
import { clearAuthErrorMsg } from '../../redux/actions/authActions';
import {
  authErrorSelector,
  authLoadingSelector,
} from '../../redux/selectors/authSelectors';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AuthForm = ({
  errorMsg,
  loading,
  clearAuthErrorMsg,
  submitFunc,
  redirectToPath,
  redirectToText,
  typeOfAuth,
}) => {
  useEffect(() => {
    if (errorMsg) {
      clearAuthErrorMsg();
    }
    /* eslint-disable-next-line */
  }, []);
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = ({ target: { name, value, checked } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'rememberMe':
        return setRememberMe(checked);

      default:
        return '';
    }
  };

  const handleBlur = ({ target: { name, value } }) => {
    if (!value) return;
    setErrors({ ...errors, [name]: ValidationHelper.validate(name, value) });
  };

  const validate = () => {
    const validation = {
      email: ValidationHelper.validate('email', email),
      password: ValidationHelper.validate('password', password),
    };

    setErrors(validation);

    return Object.keys(validation).find(el => validation[el]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validate()) return;

    submitFunc({ password, email, rememberMe });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {typeOfAuth}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Typography component="h1" variant="h5" color="error" align="center">
            {errorMsg}
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email}
            fullWidth
            value={email}
            onBlur={handleBlur}
            onChange={handleInputChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            onBlur={handleBlur}
            helperText={errors.password}
            error={Boolean(errors.password)}
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={handleInputChange}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={rememberMe}
                name="rememberMe"
                onChange={handleInputChange}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {loading ? 'Loading...' : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
              Forgot password?
            </Link> */}
            </Grid>
            <Grid item>
              <RouteLink to={redirectToPath} className="auth-switch">
                {/* eslint-disable-next-line */}
                {redirectToText}
              </RouteLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8} mb={4}>
        <Copyright />
      </Box>
    </Container>
  );
};

AuthForm.defaultProps = {
  errorMsg: '',
};

AuthForm.propTypes = {
  errorMsg: PropTypes.string,
  clearAuthErrorMsg: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  submitFunc: PropTypes.func.isRequired,
  redirectToPath: PropTypes.string.isRequired,
  typeOfAuth: PropTypes.string.isRequired,
  redirectToText: PropTypes.string.isRequired,
};

const mSTP = state => ({
  errorMsg: authErrorSelector(state),
  loading: authLoadingSelector(state),
});

const mDTP = {
  clearAuthErrorMsg,
};

export default connect(
  mSTP,
  mDTP,
)(AuthForm);
