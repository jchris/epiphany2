import { useParams } from 'react-router-dom'
import { useFireproof } from 'use-fireproof'
import { DATABASES, FocusGroup } from '../constants'

export function FocusPage() {
  const { id } = useParams()
  if (!id) {
    throw new Error('No group id')
  }
  const { useDocument } = useFireproof(DATABASES.FOCUS_GROUPS)
  const [doc] = useDocument<FocusGroup>({ _id: id, product: '', audience: '', created: 0 })

  return <h1>Focus Group: {doc.name || `${doc.product} for ${doc.audience}`}</h1>
} 