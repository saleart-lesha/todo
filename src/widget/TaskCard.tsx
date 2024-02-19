import { useParams } from 'react-router-dom'
import TaskUpdateForm from '../entities/Task/ui/TaskUpdateForm'

const TaskCard = () => {
  const Id = useParams().id
  return (
    <div className='bg-blue-200 w-1/3 rounded-lg p-4'>
      <TaskUpdateForm />
    </div>
  )
}

export default TaskCard
