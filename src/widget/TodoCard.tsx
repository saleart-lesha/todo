import { useState } from 'react'
import DropInputBtn from '../entities/DropInputButton/ui/DropInputBtn'
import { useGetTasksQuery } from '../entities/api/TaskService'
import { ITasks } from '../entities/model/ITasks'
import ActiveTask from '../entities/ui/ActiveTask'
import AddingForm from '../entities/ui/AddingForm'
import CompletedTask from '../entities/ui/CompletedTask'

const TodoCard = () => {
  const { data: tasks } = useGetTasksQuery()
  const [isDropInput, setIsDropInput] = useState(false)

  const handlerDropInput = () => {
    if (isDropInput) setIsDropInput(false)
    else setIsDropInput(true)
  }

  return (
    <div className=' bg-blue-200 w-1/2 rounded-lg p-4'>
      <h3 className='text-purple-400 font-black text-xl ps-1'>Мои задачи</h3>
      <div>
        {tasks?.map((task: ITasks) => (
          <div key={task.id} className='rounded-none bg-white m-1 flex items-center ps-3 pe-1'>
            {!task.completed && <ActiveTask task={task} />}
          </div>
        ))}
      </div>
      {isDropInput && <AddingForm setIsDropInput={setIsDropInput} />}
      <DropInputBtn isDropInput={isDropInput} handlerDropInput={handlerDropInput} />
      <details className='drop-shadow' open>
        <summary className='w-full btn bg-white text-xl text-purple-400 font-black'>
          <span>Завершенные</span>
        </summary>
        <div>
          {tasks?.map((task: ITasks) => (
            <div key={task.id} className='rounded-none bg-white m-1 flex items-center ps-3'>
              {task.completed && <CompletedTask task={task} />}
            </div>
          ))}
        </div>
      </details>
    </div>
  )
}

export default TodoCard
