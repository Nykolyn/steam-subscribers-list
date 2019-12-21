import axios from 'axios';

const URL = process.env.REACT_APP_URL;

export const getSubs = () =>
  axios.get(URL).then(response => response.data.subs);

export const postSub = sub =>
  axios.post(URL, sub).then(response => response.data.addedSub);

export const updateFav = (id, sub) =>
  axios
    .patch(`${URL}/updateSub/${id}`, sub)
    .then(response => response.data.updatedSub);
