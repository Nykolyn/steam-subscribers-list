import React from 'react';

const LoginRoute = React.lazy(() => import('./Pages/Auth/Login'));
const RegistrationRoute = React.lazy(() => import('./Pages/Auth/Register'));

const SubscribtionsRoute = React.lazy(() => import('./Pages/Subscribers'));

export const authRoutes = [
  {
    path: '/auth/login',
    component: LoginRoute,
    exact: true,
  },
  {
    path: '/auth/register',
    component: RegistrationRoute,
    exact: true,
  },
];

export const dashboardRoutes = [
  {
    path: '/subscribtions',
    component: SubscribtionsRoute,
  },
];
