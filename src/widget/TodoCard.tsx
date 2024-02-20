import { useState } from 'react'
import DropInputBtn from '../entities/DropInputButton/ui/DropInputBtn'
import { useGetTasksQuery, useUpdateTasksMutation } from '../entities/Task/api/TaskService'
import ActiveTask from '../entities/Task/ui/ActiveTask'
import CompletedTask from '../entities/Task/ui/CompletedTask'
import AddingForm from '../features/AddingForm'
import { ITask } from '../entities/Task/model/ITask'
import { useNavigate } from 'react-router-dom'

const TodoCard = () => {
  const { data: tasks } = useGetTasksQuery()
  const [isDropInput, setIsDropInput] = useState(false)
  const [updateStatusTask] = useUpdateTasksMutation()
  const navigate = useNavigate()

  const onChangeStatusTask = (task: ITask) => {
    updateStatusTask({
      ...task,
      completed: !task.completed,
    })
  }

  const handlerDropInput = () => {
    if (isDropInput) setIsDropInput(false)
    else setIsDropInput(true)
  }

  const taskActive = tasks?.map(
    (task) =>
      !task.completed && (
        <div key={task.id} className='rounded-none bg-white m-1 flex items-center ps-3 pe-1'>
          <ActiveTask task={task} onChange={onChangeStatusTask} navigate={navigate} />
        </div>
      ),
  )

  const taskCompleted = tasks?.map(
    (task) =>
      task.completed && (
        <div key={task.id} className='rounded-none bg-white m-1 flex items-center ps-3'>
          <CompletedTask task={task} onChange={onChangeStatusTask} navigate={navigate} />
        </div>
      ),
  )

  return (
    <div className=' bg-blue-200 w-1/3 rounded-lg p-4'>
      <h3 className='text-purple-400 font-black text-xl ps-1'>Мои задачи</h3>
      {taskActive}
      {isDropInput && <AddingForm />}
      <DropInputBtn isDropInput={isDropInput} handlerDropInput={handlerDropInput} />
      <details className='drop-shadow' open>
        <summary className='w-48 btn bg-white text-xl text-purple-400 font-black mb-2'>
          <span>Завершенные</span>
        </summary>
        {taskCompleted}
      </details>
    </div>
  )
}

export default TodoCard
