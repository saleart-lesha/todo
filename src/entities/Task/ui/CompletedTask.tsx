import { NavigateFunction } from 'react-router-dom'
import { ITask } from '../model/ITask'

interface TodoFormProps {
  task: ITask
  onChange: (task: ITask) => void
  navigate: NavigateFunction
}

const CompletedTask = ({ task, onChange, navigate }: TodoFormProps) => {
  return (
    <>
      <input
        checked={task.completed}
        type='checkbox'
        onChange={() => onChange(task)}
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
