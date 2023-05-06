import { useEffect, useState } from "react"
import { getTasks } from "../api/tasks.api"
import { useNavigate } from "react-router-dom"

export function TasksList() {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function tasks() {
      const res = await getTasks()
      setTasks(res.data)
    }
    tasks()
  }, [])

  return (
    <main className="w-full">
      <h2 className="text-3xl font-bold text-center p-6">Lista de tareas</h2>
      <ul className="grid grid-cols-6 justify-items-center w-full">
        {
          tasks.map(task => (
            <li className="flex flex-col rounded-sm border-2" onClick={() => {
              navigate(`/tasks/${task.id}`)
            }} key={task.id}>
              <h2 className="">{task.title}</h2>
              <p>{task.description}</p>
            </li>
          ))
        }
      </ul>
    </main>
  )
}