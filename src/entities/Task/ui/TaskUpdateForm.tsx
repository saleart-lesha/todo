import { useNavigate } from 'react-router-dom'

const TaskUpdateForm = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-4'>
        <text className='text-purple-400 font-black text-xl ps-1'>Задача</text>
        <input
          className='m-1 p-2 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md'
          type='text'
        />
      </div>
      <div className='flex flex-col mb-3'>
        <text className='text-purple-400 font-black text-xl ps-1'>Заметки</text>
        <textarea className='h-36 resize-none m-1 p-2 font-medium text-gray-900 dark:text-gray-300 focus:outline-none focus:ring focus:border-blue-300 rounded-md'>
          123
        </textarea>
      </div>
      <div className='flex justify-between ms-1 me-1 mt-2 border-slate-950'>
        <button
          onClick={() => {
            navigate('/')
          }}
          className='bg-blue-400 items-center rounded-lg p-1'
        >
          <img
            className='w-6 h-6'
            src='https://cdn.icon-icons.com/icons2/38/PNG/512/back_arrow_5821.png'
            alt=''
          />
        </button>
        <button className=' bg-lime-400 rounded-lg p-1'>
          <img
            className='w-6 h-6'
            src='https://cdn.icon-icons.com/icons2/38/PNG/512/saveas_5165.png'
            alt=''
          />
        </button>
        <button className=' bg-red-400 rounded-lg p-1'>
          <img
            className='w-6 h-6'
            src='https://cdn.icon-icons.com/icons2/1919/PNG/512/biggarbagebin_121980.png'
            alt=''
          />
        </button>
      </div>
    </div>
  )
}

export default TaskUpdateForm
