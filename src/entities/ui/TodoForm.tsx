import React, { useEffect, useState } from 'react'
import { useGetTasksQuery, useUpdateTasksMutation } from '../api/TaskService'
import { ITasks } from '../model/ITasks'

const TodoForm = () => {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleCompletedTask = () => {
    if (!isCompleted) setIsCompleted(true)
    else setIsCompleted(false)
  }

  const { data: tasks } = useGetTasksQuery()

  console.log(tasks)

  return (
    <ul>
      {tasks &&
        tasks.map((task: ITasks) => (
          <li key={task.id} className='rounded-none bg-white m-1'>
            <div className='flex items-center ps-3'>
              <input
                type='checkbox'
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
              />
              {task.completed ? (
                <label className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  <span className='line-through'>{task.taskName}</span>
                </label>
              ) : (
                <label className='w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                  {task.taskName}
                </label>
              )}
            </div>
          </li>
        ))}
    </ul>
  )
}

export default TodoForm
