import axios from 'axios';

// const URL = process.env.REACT_APP_URL;
const URL = 'http://localhost:5678';

export const getSubsApi = id =>
  axios.get(`${URL}/subscribers/${id}`).then(response => response.data.subs);

export const postSubApi = sub =>
  axios
    .post(`${URL}/subscribers`, sub)
    .then(response => response.data.addedSub);

export const updateFavApi = (id, sub) =>
  axios
    .patch(`${URL}/subscribers/updateSub/${id}`, sub)
    .then(response => response.data.updatedSub);
