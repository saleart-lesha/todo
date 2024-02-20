import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDeleteTaskMutation, useUpdateTasksMutation } from '../api/TaskService'
import { ITasks } from '../model/ITasks'

interface TaskUpdateFormProps {
  task: ITasks
}

const TaskUpdateForm = ({ task }: TaskUpdateFormProps) => {
  const navigate = useNavigate()

  const [updateTask] = useUpdateTasksMutation()
  const [deleteTask] = useDeleteTaskMutation()

  const [value, setValue] = useState<ITasks>(task)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-4'>
        <span className='text-purple-400 font-black text-xl ps-1'>Задача</span>
        <input
          className='m-1 p-2 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md'
          type='text'
          value={value.taskName}
          onChange={(e) => setValue({ ...value, taskName: e.target.value })}
        />
      </div>
      <div className='flex flex-col mb-3'>
        <span className='text-purple-400 font-black text-xl ps-1'>Заметки</span>
        <textarea
          value={value.discription}
          onChange={(e) => {
            setValue({ ...value, discription: e.target.value })
          }}
          className='h-36 resize-none m-1 p-2 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md'
        />
      </div>
      <div className='flex justify-between ms-1 me-1 mt-2 '>
        <div className='border-r-white border-r-4 w-1/3 flex justify-center'>
          <button
            onClick={() => {
              navigate('/')
            }}
            className='bg-blue-400 rounded-lg p-1'
          >
            <img
              className='w-6 h-6'
              src='https://cdn.icon-icons.com/icons2/38/PNG/512/back_arrow_5821.png'
              alt=''
            />
          </button>
        </div>
        <div className='border-r-white border-r-4 w-1/3 flex justify-center'>
          <button
            className=' bg-lime-400 rounded-lg p-1'
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
            className=' bg-red-400 rounded-lg p-1'
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
