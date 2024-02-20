import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUpdateTasksMutation } from '../api/TaskService'
import { ITasks } from '../model/ITasks'

interface TodoFormProps {
  task: ITasks
}

const CompletedTask = ({ task }: TodoFormProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)

  const navigate = useNavigate()

  const [updateStatusTask] = useUpdateTasksMutation()

  useEffect(() => {
    if (isCompleted) setIsCompleted(false)
    else setIsCompleted(true)
  }, [task.completed])

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
            discription: task.discription,
          })
        }}
        value=''
        className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
      />
      <span
        onClick={() => navigate(`/tasks/${task.id}`)}
        className='w-full py-1 m-2 text-lg font-medium text-gray-900 dark:text-gray-300 cursor-pointer line-through'
      >
        {task.taskName}
      </span>
    </>
  )
}

export default CompletedTask
