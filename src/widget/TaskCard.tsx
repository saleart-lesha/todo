import { useParams } from 'react-router-dom'
import { useGetTaskDetailsQuery } from '../entities/Task/api/TaskService'
import TaskUpdateForm from '../entities/Task/ui/TaskUpdateForm'

const TaskCard = () => {
  const { id } = useParams()
  const { data: task } = useGetTaskDetailsQuery(id ?? '')

  return (
    <div className='bg-white w-1/4 rounded-lg p-4'>{task && <TaskUpdateForm task={task} />}</div>
  )
}

export default TaskCard
