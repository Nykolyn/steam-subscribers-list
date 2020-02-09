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
    <div className="subs-length-wrap">
      <Content>
        <p className="subs-length-text">Today added:</p>
        <span className="subs-length-text__num">{sameDayAdded}</span>
      </Content>
      <Content>
        <p className="subs-length-text">Added this week:</p>
        <span className="subs-length-text__num">{sameWeekAdded}</span>
      </Content>
      <Content>
        <p className="subs-length-text">Added this month:</p>
        <span className="subs-length-text__num">{sameMonthAdded}</span>
      </Content>
      <Content>
        <p className="subs-length-text">Added last year:</p>
        <span className="subs-length-text__num">{lastYearAdded}</span>
      </Content>
      <Content>
        <p className="subs-length-text">Total:</p>
        <span className="subs-length-text__num">{showTotalAmmountOfSubs}</span>
      </Content>
    </div>
  );
}

const Content = styled.div`
  display: flex;
  padding: 14px;
  border-radius: 10px;
  transition: all 0.4s;
  align-items: center;
  margin-bottom: 10px;
  font-size: 24px;
  justify-content: space-between;
  width: 100%;
  color: rgba(156, 146, 146, 0.616);
  &:hover {
    color: white;
    transform: translateX(-10px) scale(1.1) rotateX(10deg);
    box-shadow: 6px 6px 11px -2px rgba(107, 107, 107, 1);
  }
`;

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
