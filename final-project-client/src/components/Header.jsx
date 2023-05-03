import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <h1>Estructura de datos - task app</h1>
      <Link to="/create-task">Nueva tarea</Link>
    </header>
  )
}