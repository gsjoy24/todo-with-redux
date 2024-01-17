import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
	tagTypes: ['Todos'],
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => ({
				url: '/todos',
				method: 'GET'
			}),
			providesTags: ['Todos']
		}),
		addTodo: builder.mutation({
			query: (data) => ({
				url: '/todos',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Todos']
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `/todos/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Todos']
		})
	})
});

export const { useGetTodosQuery, useDeleteTodoMutation, useAddTodoMutation } = baseApi;
