import { useForm } from "react-hook-form"
import { newTask, deleteTask, updateTask, getTask } from "../api/tasks.api"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

export function TaskFormPage() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const nav = useNavigate()
  const deleteParams = useParams()

  const onSubmit = handleSubmit(async (data) => {
    if (deleteParams.id) {
      await updateTask(deleteParams.id, data)
      toast.success('Tarea actualizada')
    } else {
      await newTask(data)
      toast.success('Tarea creada')
    }
    nav("/tasks")
  })

  useEffect(() => {
    async function updateOldTask() {
      if (deleteParams.id) {
        const { data } = await getTask(deleteParams.id)
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }
    updateOldTask()
  }, [])

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title" {...register("title", { required: true })} />
        {errors.title && <span>Este campo es requerido</span>}
        <textarea cols="50" rows="10" placeholder="Description" {...register("description", { required: false })} ></textarea>
        <button>Save task</button>
      </form>
      {
        deleteParams.id && <button onClick={
          async () => {
            const deletedconfirmed = window.confirm("Are you sure? You can't get back this action")
            if (deletedconfirmed) {
              await deleteTask(deleteParams.id)
              toast.success('Tarea eliminada', {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff"
                }
              })
              nav("/tasks")
            }
          }
        }>Delete task</button>
      }
    </main >
  )
}