import { useParams } from 'react-router-dom'

export function ProbePage() {
  const { id } = useParams()
  return <h1>Probe {id}</h1>
} 