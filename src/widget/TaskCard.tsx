import { useParams } from 'react-router-dom'
import TaskUpdateForm from '../entities/Task/ui/TaskUpdateForm'
import { useEffect, useState } from 'react'
import { useLazyGetTaskDetailsQuery } from '../entities/Task/api/TaskService'
import { ITasks } from '../entities/Task/model/ITasks'

const TaskCard = () => {
  const { id } = useParams()
  console.log(id)
  const [fetchTask, { data: task }] = useLazyGetTaskDetailsQuery()

  useEffect(() => {
    if (id) {
      fetchTask(id)
    }
  }, [id])

  return (
    <div className='bg-blue-200 w-1/3 rounded-lg p-4'>{task && <TaskUpdateForm task={task} />}</div>
  )
}

export default TaskCard
