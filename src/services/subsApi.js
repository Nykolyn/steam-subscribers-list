import axios from 'axios';

const URL = process.env.REACT_APP_URL;

export const getSubsApi = () =>
  axios.get(`${URL}/subscribers`).then(response => response.data.subs);

export const postSubApi = sub =>
  axios
    .post(`${URL}/subscribers`, sub)
    .then(response => response.data.addedSub);

export const updateFavApi = (id, sub) =>
  axios
    .patch(`${URL}/subscribers/updateSub/${id}`, sub)
    .then(response => response.data.updatedSub);

export const signInApi = async password => {
  try {
    const response = await axios.post(`${URL}/auth/login`, password);
    return response.data;
  } catch (err) {
    return console.error('error sign in', err);
  }
};
