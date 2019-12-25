import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { START_PAGE } from '../../helpers/constants';

const Pagination = ({ maxPage, handleChangePage, currentPage }) => (
  <div className="pagination-wrapper">
    <IconButton
      className="pagination-button"
      color="primary"
      name="prev"
      disabled={currentPage === START_PAGE}
      onClick={() => handleChangePage('prev')}
    >
      <ArrowBackIosIcon
        className="pagination-button"
        disabled={currentPage === START_PAGE}
      />
    </IconButton>
    <h1>
      Page {currentPage} of {maxPage()}
    </h1>
    <IconButton
      className="pagination-button"
      name="next"
      disabled={currentPage === maxPage()}
      onClick={() => handleChangePage('next')}
    >
      <ArrowForwardIosIcon
        className="pagination-button"
        disabled={currentPage === START_PAGE}
      />
    </IconButton>
  </div>
);

Pagination.propTypes = {
  maxPage: PropTypes.func.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
