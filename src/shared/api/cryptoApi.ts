import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3/' }),
  endpoints: (builder) => ({
    getCoinsList: builder.query<any[], void>({
      query: () => 'coins/list',
    }),
    getCoinHistory: builder.query<any, { id: string; date: string }>({
      query: ({ id, date }) => `coins/${id}/history?date=${date}`,
    }),
  }),
});

export const { useGetCoinsListQuery, useGetCoinHistoryQuery } = cryptoApi;