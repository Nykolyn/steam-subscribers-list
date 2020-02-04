import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as selectors from '../../redux/selectors/subscribtionSelectors';

function SubsInfo({
  showTotalAmmountOfSubs,
  sameDayAdded,
  sameWeekAdded,
  sameMonthAdded,
  lastYearAdded,
}) {
  return (
    <Content className="subs-length-wrap">
      <p className="subs-length-text">
        Today added:
        <span className="subs-length-text__num">{sameDayAdded}</span>
      </p>
      <p className="subs-length-text">
        Added this week:
        <span className="subs-length-text__num">{sameWeekAdded}</span>
      </p>
      <p className="subs-length-text">
        Added this month:
        <span className="subs-length-text__num">{sameMonthAdded}</span>
      </p>
      <p className="subs-length-text">
        Added last year:
        <span className="subs-length-text__num">{lastYearAdded}</span>
      </p>
      <p className="subs-length-text">
        Total:
        <span className="subs-length-text__num">{showTotalAmmountOfSubs}</span>
      </p>
    </Content>
  );
}

const Content = styled.div``;

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
