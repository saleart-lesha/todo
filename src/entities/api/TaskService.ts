import { TaskService } from '../../app/services/TaskService'
import { ITasks } from '../model/ITasks'
import { ITasksCompleted } from '../model/ITasksCompleted'

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
    getCompletedTasks: build.mutation<ITasksCompleted[], void>({
      query: () => ({
        url: '/taskCompleted',
      }),
    }),
    addTask: build.mutation<ITasks, { taskName: string; completed: boolean }>({
      query: (body) => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tasks'],
    }),
  }),
})

export const { useGetTasksQuery, useUpdateTasksMutation, useAddTaskMutation } = taskService
