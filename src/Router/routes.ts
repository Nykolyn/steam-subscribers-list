import React from 'react';

const Login = React.lazy(() => import('../Authorization/Login'));
const Registration = React.lazy(() => import('../Authorization/Registration'));

type TRouteType = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
};

export const publicRoutes: TRouteType[] = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/registration',
    exact: true,
    component: Registration,
  },
];

export const privateRoutes: TRouteType[] = [];
