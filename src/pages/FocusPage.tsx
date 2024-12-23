import { useParams } from 'react-router-dom'

export function FocusPage() {
  const { id } = useParams()
  return <h1>Focus on {id}</h1>
} 