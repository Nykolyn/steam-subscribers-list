import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as selectors from '../../redux/selectors/subscribtionSelectors';

function SubsInfo({
  showTotalAmmountOfSubs,
  sameDayAdded,
  sameWeekAdded,
  sameMonthAdded,
  lastYearAdded,
}) {
  return (
    <div className="subs-length-wrap">
      <p className="subs-length-text">Total length: {showTotalAmmountOfSubs}</p>
      <p className="subs-length-text">Today added: {sameDayAdded}</p>
      <p className="subs-length-text">Added this week: {sameWeekAdded}</p>
      <p className="subs-length-text">Added this month: {sameMonthAdded}</p>
      {lastYearAdded && (
        <p className="subs-length-text">Added last year: {lastYearAdded}</p>
      )}
    </div>
  );
}

SubsInfo.defaultProps = {
  lastYearAdded: 0,
};

SubsInfo.propTypes = {
  showTotalAmmountOfSubs: PropTypes.number.isRequired,
  sameDayAdded: PropTypes.number.isRequired,
  sameWeekAdded: PropTypes.number.isRequired,
  sameMonthAdded: PropTypes.number.isRequired,
  lastYearAdded: PropTypes.number,
};

const mSTP = state => ({
  sameDayAdded: selectors.isSameDaySelector(state),
  sameWeekAdded: selectors.isSameWeekSelector(state),
  sameMonthAdded: selectors.isSameMonthSelector(state),
  lastYearAdded: selectors.lastYearSelector(state),
});

export default connect(mSTP)(SubsInfo);
