import { publicApi, privateApi } from 'http/http';

export const authHeader = {
  set(token) {
    privateApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clear() {
    privateApi.defaults.headers.common.Authorization = '';
  },
};

export const signUpService = async credentials => {
  const { data } = await publicApi.post('/users/signup', credentials);
  return data;
};

export const signInService = async credentials => {
  const { data } = await publicApi.post('/users/login', credentials);
  return data;
};

export const refreshUserService = async () => {
  const { data } = await privateApi.get('/users/current');
  return data;
};

export const SignOutService = async () => {
  return await privateApi.post('/users/logout');
};
