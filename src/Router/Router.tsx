import { Result } from 'antd';
import { useSelector } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';

import { StyledButton } from '../common/ui';
import { TRootState } from 'src/redux/state';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { publicRoutes, privateRoutes } from './routes';

const Router = () => {
  const history = useHistory();
  const token = useSelector(({ auth }: TRootState) => auth?.token);

  return (
    <Switch>
      {publicRoutes.map((routeProps, i) => (
        // @ts-ignore
        <PublicRoute key={i} {...routeProps} />
      ))}
      {privateRoutes.map(({ component, ...routeProps }, i) => (
        <PrivateRoute key={i} {...routeProps} />
      ))}
      <Route>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <StyledButton onClick={() => history.replace(token ? '/' : '/login')} type="primary">
              Back Home
            </StyledButton>
          }
        />
      </Route>
    </Switch>
  );
};

export default Router;
