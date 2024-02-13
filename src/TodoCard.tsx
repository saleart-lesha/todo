import { useGetTasksQuery } from './entities/api/TaskService'
import { ITasks } from './entities/model/ITasks'
import TodoForm from './entities/ui/TodoForm'

const TodoCard = () => {
  const { data: tasks } = useGetTasksQuery()
  return (
    <div className=' bg-slate-400 w-1/2 rounded-lg p-4'>
      <ul>
        {tasks?.map((task: ITasks) => (
          <li key={task.id} className='rounded-none bg-white m-1'>
            <TodoForm task={task} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoCard
