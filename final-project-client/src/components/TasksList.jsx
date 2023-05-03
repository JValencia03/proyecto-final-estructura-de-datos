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
    <div>
      {
        tasks.map(task => (
          <div onClick={() => {
            navigate(`/tasks/${task.id}`)
          }} key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}