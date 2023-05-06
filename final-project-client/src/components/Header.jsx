import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="bg-stone-700 text-center text-7xl p-8">
      <h1 className="text-neutral-100 font-bold">Estructura de datos - task app</h1>
      <Link className="text-rose-700 font-semibold hover:bg-red-400" to="/create-task">Nueva tarea</Link>
    </header>
  )
}