import { useGetTasksQuery } from './entities/api/TaskService'
import { ITasks } from './entities/model/ITasks'
import ComplitedTask from './entities/ui/ComplitedTask'
import TodoForm from './entities/ui/TodoForm'

const TodoCard = () => {
  const { data: tasks } = useGetTasksQuery()
  return (
    <div className=' bg-slate-400 w-1/2 rounded-lg p-4'>
      <div>
        <h3>Мои задачи</h3>
        <ul>
          {tasks?.map((task: ITasks) => (
            <li key={task.id} className='rounded-none bg-white m-1'>
              {!task.completed && <TodoForm task={task} />}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <details className='drop-shadow' open>
          <summary className='m-1 btn'>Завршенные</summary>
          <ul>
            {tasks?.map((task: ITasks) => (
              <li key={task.id} className='rounded-none bg-white m-1'>
                {task.completed && <ComplitedTask task={task} />}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </div>
  )
}

export default TodoCard
