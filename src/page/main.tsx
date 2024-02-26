import { Route, Routes } from 'react-router-dom'
import TaskCard from '../widget/TaskCard'
import TodoCard from '../widget/TodoCard'

function Main() {
  return (
    <div className='flex justify-center flex-col items-center h-screen bg-gradient-to-r from-purple-200 to-pink-200'>
      <Routes>
        <Route path='/' element={<TodoCard />} />
        <Route path='/tasks/:id' element={<TaskCard />} />
      </Routes>
    </div>
  )
}

export default Main
