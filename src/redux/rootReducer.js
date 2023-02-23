import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { authReducer } from './auth/auth-slice';
import { contactReducer } from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-slice';

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(tokenPersistConfig, authReducer);

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  auth: persistedAuthReducer,
});
