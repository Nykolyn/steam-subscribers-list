import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';

import { logOut } from '../../redux/actions/authActions';

function Navigation() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const handleLogOut = () => {
    dispatch(logOut());
    localStorage.removeItem('token');
  };

  return (
    isAuth && (
      <Header>
        {/* <div className="container"> */}
        <NavMenu>
          <li />
          <li>
            <IconButton onClick={() => handleLogOut()}>
              <ExitToAppIcon style={{ color: '#fff' }} />
            </IconButton>
          </li>
        </NavMenu>
        {/* </div> */}
      </Header>
    )
  );
}

const Header = styled.header``;

const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
`;

export default Navigation;
