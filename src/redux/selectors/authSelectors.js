export const authSelector = state => state.auth.isAuth;
/* eslint-disable-next-line */
export const idSelector = state => state.auth.user._id;
export const tokenSelector = state => state.auth.token;
export const authLoadingSelector = state => state.auth.loading;
export const authErrorSelector = state => state.auth.error;
