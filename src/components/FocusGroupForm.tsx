import { useFireproof } from 'use-fireproof'
import { DATABASES, FocusGroup } from '../constants'

export function FocusGroupForm() {
  const { useDocument } = useFireproof(DATABASES.FOCUS_GROUPS)
  const [doc, updateDoc, saveDoc] = useDocument<FocusGroup>({
    product: '',
    audience: '',
    created: Date.now()
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await saveDoc()
    await updateDoc()
  }

  return (
    <form className="flex flex-col gap-2 p-4" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Product" 
        className="border border-gray-300 rounded-md p-2"
        value={doc.product}
        onChange={e => updateDoc({ ...doc, product: e.target.value })}
      />
      <input 
        type="text" 
        placeholder="Audience" 
        className="border border-gray-300 rounded-md p-2"
        value={doc.audience} 
        onChange={e => updateDoc({ ...doc, audience: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white rounded-md p-2">New Group</button>
    </form>
  )
}