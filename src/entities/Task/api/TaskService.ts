import { TaskService } from '../../../app/services/TaskService'
import { ITask } from '../model/ITask'

const taskService = TaskService.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<ITask[], void>({
      query: () => ({
        url: '/tasks',
      }),
      providesTags: ['Tasks'],
    }),
    getTaskDetails: build.query<ITask, string>({
      query: (id) => ({
        url: `tasks/${id}`,
      }),
      providesTags: ['Tasks'],
    }),
    updateTasks: build.mutation<ITask, Partial<ITask>>({
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
  useGetTaskDetailsQuery,
  useUpdateTasksMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
} = taskService
