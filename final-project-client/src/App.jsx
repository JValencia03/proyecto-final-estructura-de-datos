import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TaskPage } from './pages/TaskPage'
import { TaskFormPage } from './pages/TaskFormPage'
import { Header } from './components/Header'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/create-task" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App