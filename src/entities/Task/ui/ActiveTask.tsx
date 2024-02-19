import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteTaskMutation, useUpdateTasksMutation } from '../api/TaskService'
import { ITasks } from '../model/ITasks'

interface TodoFormProps {
  task: ITasks
}

const ActiveTask = ({ task }: TodoFormProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)
  const [deleteTask] = useDeleteTaskMutation()

  useEffect(() => {
    if (isCompleted) setIsCompleted(false)
    else setIsCompleted(true)
  }, [task.completed])

  const [updateStatusTask] = useUpdateTasksMutation()

  const navigate = useNavigate()

  return (
    <>
      <input
        checked={task.completed}
        type='checkbox'
        onChange={() => {
          updateStatusTask({
            id: task.id,
            taskName: task.taskName,
            completed: isCompleted,
          })
        }}
        value=''
        className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
      />
      <text
        onClick={() => navigate('/task')}
        className='cursor-pointer w-full py-1 m-2 text-lg font-medium text-gray-900 dark:text-gray-300'
      >
        {task.taskName}
      </text>
      <button
        onClick={() => deleteTask(task.id)}
        className='w-6 h-6 border-black bg-red-200 hover:bg-red-300 inline-flex items-center'
      >
        <img
          className='w-6 h-6'
          src='https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086345-cross_81577.png'
          alt=''
        />
      </button>
    </>
  )
}

export default ActiveTask
