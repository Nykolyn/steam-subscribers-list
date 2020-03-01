import { getFromLS } from './localStorage';

const getPreventedStore = () => {
  const token = getFromLS('token');

  if (token) {
    return { auth: { isAuth: true } };
  }

  return {};
};

export default getPreventedStore;
