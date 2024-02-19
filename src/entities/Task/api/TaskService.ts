import { TaskService } from '../../../app/services/TaskService'
import { ITasks } from '../model/ITasks'

const taskService = TaskService.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<ITasks[], void>({
      query: () => ({
        url: '/tasks',
      }),
      providesTags: ['Tasks'],
    }),
    updateTasks: build.mutation<ITasks, Partial<ITasks>>({
      query(data) {
        const { id, ...body } = data
        return {
          url: `tasks/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Tasks'],
    }),
    addTask: build.mutation<void, { taskName: string; completed: boolean }>({
      query: (body) => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
    deleteTask: build.mutation<void, number>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
})

export const {
  useGetTasksQuery,
  useUpdateTasksMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = taskService
