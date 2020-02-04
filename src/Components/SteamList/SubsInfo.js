import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import * as selectors from '../../redux/selectors/subscribtionSelectors';

function SubsInfo({
  showTotalAmmountOfSubs,
  sameDayAdded,
  sameWeekAdded,
  sameMonthAdded,
  lastYearAdded,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Content>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <StyledDropdownToggle caret>Added subs stats</StyledDropdownToggle>
        <StyledDropdownMenu className="subs-length-wrap">
          <StyledDropdownItem className="subs-length-text">
            Total length:
            <span className="subs-length-text__num">
              {showTotalAmmountOfSubs}
            </span>
          </StyledDropdownItem>
          <StyledDropdownItem className="subs-length-text">
            Today added:
            <span className="subs-length-text__num">{sameDayAdded}</span>
          </StyledDropdownItem>
          <StyledDropdownItem className="subs-length-text">
            Added this week:
            <span className="subs-length-text__num">{sameWeekAdded}</span>
          </StyledDropdownItem>
          <StyledDropdownItem className="subs-length-text">
            Added this month:
            <span className="subs-length-text__num">{sameMonthAdded}</span>
          </StyledDropdownItem>
          {lastYearAdded > 0 && (
            <StyledDropdownItem className="subs-length-text">
              Added last year:
              <span className="subs-length-text__num">{lastYearAdded}</span>
            </StyledDropdownItem>
          )}
        </StyledDropdownMenu>
      </Dropdown>
    </Content>
  );
}

const Content = styled.div``;

const StyledDropdownMenu = styled(DropdownMenu)`
  background-color: transparent;
`;

const StyledDropdownToggle = styled(DropdownToggle)`
  background-color: transparent;
  &:active,
  &:focus,
  &:hover {
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const StyledDropdownItem = styled(DropdownItem)`
  padding: 0;
  &:hover {
    background-color: transparent;
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
