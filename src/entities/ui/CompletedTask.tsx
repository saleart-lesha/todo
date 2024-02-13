import { useEffect, useState } from 'react'
import { useUpdateTasksMutation } from '../api/TaskService'
import { ITasks } from '../model/ITasks'

interface TodoFormProps {
  task: ITasks
}

const CompletedTask = ({ task }: TodoFormProps) => {
  const [isCompleted, setIsCompleted] = useState(task.completed)

  useEffect(() => {
    if (isCompleted) setIsCompleted(false)
    else setIsCompleted(true)
  }, [task.completed])

  const [updateStatusTask] = useUpdateTasksMutation()
  return (
    <div className='flex items-center ps-3'>
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
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
      />
      <label className='w-full py-1 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
        <span className='line-through'>{task.taskName}</span>
      </label>
    </div>
  )
}

export default CompletedTask
