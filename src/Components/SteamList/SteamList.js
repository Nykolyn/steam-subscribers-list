import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import SteamItem from './SteamItem';
import { addSubLoadSelector } from '../../redux/selectors/subscribtionSelectors';

const SteamList = ({ subscribers, addSubLoading }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (addSubLoading) {
      return setLoading(true);
    }

    return setLoading(false);
  }, [addSubLoading]);

  return (
    subscribers.length > 0 && (
      <div>
        {loading && (
          <LoaderWrapper>
            <CircularProgress />
          </LoaderWrapper>
        )}
        <StyledTable>
          <tbody>
            <tr className="subs-head">
              <th className="subs-head__item">Name</th>
              <th className="subs-head__item">Date Added</th>
              <th className="subs-head__item">Favorite</th>
            </tr>
          </tbody>
        </StyledTable>
        <TableContent>
          <StyledTable>
            <tbody className="subs-body">
              {subscribers.map(sub => (
                <SteamItem key={sub.userID} {...sub} />
              ))}
            </tbody>
          </StyledTable>
        </TableContent>
      </div>
    )
  );
};

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledTable = styled.table`
  width: 100%;
  font-size: 20px;
  padding: 2rem;
  color: #fff;
  margin: 10px auto;
`;

const TableContent = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 10px;

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

// const SteamList = ({ subscribers, addSubLoading }) => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (addSubLoading) {
//       return setLoading(true);
//     }

//     return setLoading(false);
//   }, [addSubLoading]);

//   return (
//     <ul className="subs-list">
//       {loading && (
//         <li className="subs-list__item--loader">
//           <CircularProgress />
//         </li>
//       )}
//       {subscribers.map(sub => (
//         <li key={sub.userID} className="subs-list__item">
//           <SteamItem {...sub} />
//         </li>
//       ))}
//     </ul>
//   );
// };

SteamList.propTypes = {
  subscribers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  addSubLoading: PropTypes.bool.isRequired,
};

const mSTP = state => ({
  addSubLoading: addSubLoadSelector(state),
});

export default connect(mSTP)(SteamList);
