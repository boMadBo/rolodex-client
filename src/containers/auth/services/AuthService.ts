import { ISignInData, ISignUpData } from '@/containers/auth/types';
import { baseQuery } from '@/shared/api/baseQuery';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  tagTypes: ['Auth'],
  endpoints: build => ({
    useSignUp: build.mutation<ISignUpData, FormData>({
      query: formData => ({
        url: `user`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Auth'],
    }),
    useSignIn: build.mutation<ISignInData, ISignInData>({
      query: data => ({
        url: `auth/login`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});
