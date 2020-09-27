import axios from 'axios';

const URL = process.env.REACT_APP_URL;
// const URL = 'http://localhost:8080';

export const signInApi = async user => {
  const response = await axios.post(`${URL}/auth/login`, user);
  return response.data;
};

export const signUpApi = async user => {
  const response = await axios.post(`${URL}/auth/register`, user);
  return response.data;
};

export const refreshUserApi = async id => {
  const response = await axios.get(`${URL}/user/${id}`);
  return response.data;
};
