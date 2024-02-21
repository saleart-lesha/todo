import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteTaskMutation, useUpdateTasksMutation } from '../api/TaskService'
import { ITask } from '../model/ITask'

interface TaskUpdateFormProps {
  task: ITask
}

const TaskUpdateForm = ({ task }: TaskUpdateFormProps) => {
  const navigate = useNavigate()

  const [updateTask] = useUpdateTasksMutation()
  const [deleteTask] = useDeleteTaskMutation()

  const [value, setValue] = useState<ITask>(task)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-3'>
        <h3 className='font-bold text-xl ps-1 border-b-stone-200 border-b-2 mb-4 '>Задача</h3>
        <div className='flex items-center rounded-full border-2 border-neutral-200 bg-white m-1'>
          <input
            className='w-full text-lg py-2 pl-4 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-full'
            type='text'
            value={value.taskName}
            onChange={(e) => setValue((prevState) => ({ ...prevState, taskName: e.target.value }))}
          />
        </div>
      </div>
      <div className='flex flex-col mb-3'>
        <h3 className='font-bold text-xl ps-1 border-b-stone-200 border-b-2 mb-4 '>Заметки</h3>
        <div className='flex items-center rounded-md border-2 border-neutral-200 bg-white m-1'>
          <textarea
            value={value.description}
            onChange={(e) =>
              setValue((prevState) => ({ ...prevState, description: e.target.value }))
            }
            className='h-36 w-full resize-none p-2 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md'
          />
        </div>
      </div>
      <div className='flex justify-between ms-1 me-1 mt-2 '>
        <div className='border-r-stone-200 border-r-2 w-1/3 flex justify-center'>
          <button
            onClick={() => {
              navigate('/')
            }}
            className='w-full flex justify-center mr-2 border-neutral-200 border-2 hover:bg-stone-200 rounded-lg p-1'
          >
            <img
              className='w-6 h-6'
              src='https://cdn.icon-icons.com/icons2/38/PNG/512/back_arrow_5821.png'
              alt=''
            />
          </button>
        </div>
        <div className='border-r-stone-200 border-r-2 w-1/3 flex justify-center'>
          <button
            className='w-full flex justify-center mr-2 ml-2 border-neutral-200 border-2 hover:bg-stone-200 rounded-lg p-1'
            onClick={() => {
              if (value.taskName) {
                updateTask({ ...value })
              }
            }}
          >
            <img
              className='w-6 h-6'
              src='https://cdn.icon-icons.com/icons2/38/PNG/512/saveas_5165.png'
              alt=''
            />
          </button>
        </div>
        <div className='w-1/3 flex justify-center'>
          <button
            onClick={() => {
              deleteTask(task.id)
              navigate('/')
            }}
            className='w-full flex justify-center ml-2 border-neutral-200 border-2 hover:bg-stone-200 rounded-lg p-1'
          >
            <img
              className='w-6 h-6'
              src='https://cdn.icon-icons.com/icons2/1919/PNG/512/biggarbagebin_121980.png'
              alt=''
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TaskUpdateForm
