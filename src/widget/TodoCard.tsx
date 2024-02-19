import { useState } from 'react'
import DropInputBtn from '../entities/DropInputButton/ui/DropInputBtn'
import { useGetTasksQuery } from '../entities/Task/api/TaskService'
import { ITasks } from '../entities/Task/model/ITasks'
import ActiveTask from '../entities/Task/ui/ActiveTask'
import CompletedTask from '../entities/Task/ui/CompletedTask'
import AddingForm from '../features/AddingForm'

const TodoCard = () => {
  const { data: tasks } = useGetTasksQuery()
  const [isDropInput, setIsDropInput] = useState(false)

  const handlerDropInput = () => {
    if (isDropInput) setIsDropInput(false)
    else setIsDropInput(true)
  }

  return (
    <div className=' bg-blue-200 w-1/3 rounded-lg p-4'>
      <h3 className='text-purple-400 font-black text-xl ps-1'>Мои задачи</h3>
      <div>
        {tasks?.map(
          (task: ITasks) =>
            !task.completed && (
              <div key={task.id} className='rounded-none bg-white m-1 flex items-center ps-3 pe-1'>
                <ActiveTask task={task} />
              </div>
            ),
        )}
      </div>
      {isDropInput && <AddingForm />}
      <DropInputBtn isDropInput={isDropInput} handlerDropInput={handlerDropInput} />
      <details className='drop-shadow' open>
        <summary className='w-48 btn bg-white text-xl text-purple-400 font-black mb-2'>
          <span>Завершенные</span>
        </summary>
        <div>
          {tasks?.map(
            (task: ITasks) =>
              task.completed && (
                <div key={task.id} className='rounded-none bg-white m-1 flex items-center ps-3'>
                  <CompletedTask task={task} />
                </div>
              ),
          )}
        </div>
      </details>
    </div>
  )
}

export default TodoCard
