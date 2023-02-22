import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// export const token = {
//   set(accessToken) {
//     authAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   },
//   unSet() {
//     authAxios.defaults.headers.common.Authorization = '';
//   },
// };

export const signUpService = async credentials => {
  const { data } = await authApi.post('/users/signup', credentials);
  // token.set(data.token);
  return data;
};

// export const logOutUser = async () => {
//   const { data } = await authApi.post('/users/logout');
//   token.unSet();
//   return data;
// };
