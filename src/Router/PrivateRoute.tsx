import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { TRootState } from 'src/redux/state';

const PublicRoute: React.FC<RouteProps> = (routeProps) => {
  const token = useSelector(({ auth }: TRootState) => auth?.token);

  if (!token) {
    return (
      <Redirect
        to={{
          pathname: '/login',
        }}
      />
    );
  }

  return <Route {...routeProps} />;
};

export default PublicRoute;
