import React from 'react';
import { Typography } from '@material-ui/core';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © Nykolyn Andrii 2019-{new Date().getFullYear()}.
    </Typography>
  );
}
