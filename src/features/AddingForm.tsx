import { useState } from 'react'
import { useAddTaskMutation } from '../entities/Task/api/TaskService'

const AddingForm = () => {
  const [value, setValue] = useState<string>('')
  const [addTask] = useAddTaskMutation()

  return (
    <div className='flex items-center ps-3 pe-1 rounded-none bg-white m-1'>
      <input
        type='checkbox'
        disabled
        value=''
        className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
      />
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className=' w-full text-lg py-1 m-2 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md'
      ></input>
      <button
        onClick={() => {
          if (value) {
            addTask({ taskName: value, completed: false })
            setValue('')
          }
        }}
        className='w-6 h-6 border-black bg-sky-200 hover:bg-sky-300 inline-flex items-center'
      >
        <img
          className='w-6 h-6'
          src='https://cdn.icon-icons.com/icons2/3991/PNG/512/up_arrow_arrow_icon_253897.png'
          alt=''
        />
      </button>
    </div>
  )
}

export default AddingForm
