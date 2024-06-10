import { accountAPI } from '@/containers/account/services/AccountService';
import { authAPI } from '@/containers/auth/services/AuthService';
import rememberMeSlice from '@/containers/auth/services/RememberMeSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  rememberMe: rememberMeSlice,
  [authAPI.reducerPath]: authAPI.reducer,
  [accountAPI.reducerPath]: accountAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authAPI.middleware, accountAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
