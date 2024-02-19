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
      <text className='w-full py-1 m-2 text-lg font-medium text-gray-900 dark:text-gray-300 cursor-pointer line-through'>
        {task.taskName}
      </text>
    </>
  )
}

export default CompletedTask
