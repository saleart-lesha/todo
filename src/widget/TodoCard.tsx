import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DropInputBtn from '../entities/DropInputButton/ui/DropInputBtn'
import { useGetTasksQuery, useUpdateTasksMutation } from '../entities/Task/api/TaskService'
import { ITask } from '../entities/Task/model/ITask'
import ActiveTask from '../entities/Task/ui/ActiveTask'
import CompletedTask from '../entities/Task/ui/CompletedTask'
import AddingForm from '../features/AddingForm'

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
        <div
          key={task.id}
          className='rounded-full bg-white m-1 flex items-center ps-3 pe-1 border-neutral-200 border-2 hover:bg-stone-200'
        >
          <ActiveTask task={task} onChange={onChangeStatusTask} navigate={navigate} />
        </div>
      ),
  )

  const taskCompleted = tasks?.map(
    (task) =>
      task.completed && (
        <div
          key={task.id}
          className='rounded-full bg-white m-1 flex items-center ps-3 pe-1 border-neutral-200 border-2 hover:bg-stone-200'
        >
          <CompletedTask task={task} onChange={onChangeStatusTask} navigate={navigate} />
        </div>
      ),
  )

  return (
    <div className=' bg-white w-1/4 rounded-lg p-4'>
      <h3 className=' text-center font-bold text-xl ps-1 border-b-stone-200 border-b-2 mb-4'>
        Мои задачи
      </h3>
      {taskActive}
      {isDropInput && <AddingForm />}
      <DropInputBtn isDropInput={isDropInput} handlerDropInput={handlerDropInput} />
      <details className='drop-shadow' open>
        <summary className='btn font-bold text-xl ps-1 border-b-stone-200 border-b-2 mb-4'>
          <span>Завершенные</span>
        </summary>
        {taskCompleted}
      </details>
    </div>
  )
}

export default TodoCard
