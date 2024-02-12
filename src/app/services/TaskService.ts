import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const TaskService = createApi({
  reducerPath: 'TaskService',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Tasks'],
  endpoints: () => ({}),
})
