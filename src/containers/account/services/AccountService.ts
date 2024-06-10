import { IUserValues, TUserCollectionValues } from '@/containers/account/types';
import { baseQuery } from '@/shared/api/baseQuery';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const accountAPI = createApi({
  reducerPath: 'accountAPI',
  baseQuery,
  tagTypes: ['Account'],
  endpoints: build => ({
    getAccount: build.query<IUserValues, void>({
      query: () => ({
        url: 'user',
      }),
      providesTags: (result, error) => [{ type: 'Account', result, error }],
    }),
    signOut: build.mutation<void, void>({
      query: () => ({
        url: `auth/logout`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Account'],
    }),
    updateAccount: build.mutation<IUserValues, FormData>({
      query: formData => ({
        url: `/user`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Account'],
    }),
    getList: build.query<TUserCollectionValues[], void>({
      query: () => ({
        url: 'user/list',
      }),
      providesTags: (result, error) => [{ type: 'Account', result, error }],
    }),
  }),
});
