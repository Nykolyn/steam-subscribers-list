import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export default function FormDialog({ submitPassword }) {
  const [input, setInput] = useState('');

  const handleChange = ({ target: { value } }) => setInput(value);

  const handleSubmit = e => {
    e.preventDefault();
    const password = input.trim();
    if (password === '') return;
    submitPassword(input);
  };
  return (
    <Dialog open aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Sign in</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>
            To proceed please enter a valid password
          </DialogContentText>
          <TextField
            autoFocus
            value={input}
            margin="dense"
            label="Password"
            type="pasword"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary">
            Jump
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

FormDialog.propTypes = {
  submitPassword: PropTypes.func.isRequired,
};
