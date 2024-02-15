import { useState } from 'react'
import { useGetTasksQuery } from './entities/api/TaskService'
import { ITasks } from './entities/model/ITasks'
import AddingForm from './entities/ui/AddingForm'
import CompletedTask from './entities/ui/CompletedTask'
import TodoForm from './entities/ui/TodoForm'

const TodoCard = () => {
  const { data: tasks } = useGetTasksQuery()
  const [isDropInput, setIsDropInput] = useState(false)
  const handleDropInput = () => {
    if (isDropInput) setIsDropInput(false)
    else setIsDropInput(true)
  }
  return (
    <div className=' bg-blue-200 w-1/2 rounded-lg p-4'>
      <div>
        <h3 className='text-purple-400 font-black text-xl ps-1'>Мои задачи</h3>
        <ul>
          {tasks?.map((task: ITasks) => (
            <li key={task.id} className='rounded-none bg-white m-1'>
              {!task.completed && <TodoForm task={task} />}
            </li>
          ))}
        </ul>
      </div>
      {isDropInput && <AddingForm setIsDropInput={setIsDropInput} />}
      <div className='flex justify-center m-1'>
        <div className='flex justify-center m-1'>
          <button
            onClick={() => handleDropInput()}
            className='rounded-full bg-green-200 hover:bg-green-300 inline-flex items-center w-10 h-10'
          >
            <img
              className='w-10 h-10'
              src='https://cdn.icon-icons.com/icons2/3138/PNG/512/plus_new_create_more_icon_192478.png'
              alt='Plus icon'
            />
          </button>
        </div>
      </div>
      <div>
        <details className='drop-shadow' open>
          <summary className='m-1 btn bg-white w-40 text-lg text-purple-400 font-black'>
            <span>Завершенные</span>
          </summary>
          <ul>
            {tasks?.map((task: ITasks) => (
              <li key={task.id} className='rounded-none bg-white m-1'>
                {task.completed && <CompletedTask task={task} />}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  )
}

export default TodoCard
