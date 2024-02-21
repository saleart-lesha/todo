import { NavigateFunction } from 'react-router-dom'
import { useDeleteTaskMutation } from '../api/TaskService'
import { ITask } from '../model/ITask'

interface TodoFormProps {
  task: ITask
  onChange: (task: ITask) => void
  navigate: NavigateFunction
}

const ActiveTask = ({ task, onChange, navigate }: TodoFormProps) => {
  const [deleteTask] = useDeleteTaskMutation()

  return (
    <>
      <input
        checked={task.completed}
        type='checkbox'
        onChange={() => onChange(task)}
        value=''
        className='w-6 h-6 rounded-full text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
      />
      <span
        onClick={() => navigate(`/tasks/${task.id}`)}
        className='cursor-pointer w-full py-1 m-2 text-lg font-medium text-gray-900 dark:text-gray-300'
      >
        {task.taskName}
      </span>
      <div className='mr-4 items-center flex '>
        <button
          onClick={() => deleteTask(task.id)}
          className='w-7 h-7 rounded-full border-black  hover:bg-rose-300 inline-flex items-center'
        >
          <img
            className='w-5 h-5 ml-1'
            src='https://cdn.icon-icons.com/icons2/1157/PNG/512/1487086345-cross_81577.png'
            alt=''
          />
        </button>
      </div>
    </>
  )
}

export default ActiveTask
