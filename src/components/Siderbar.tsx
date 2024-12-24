import { Link } from 'react-router-dom'
import { useFireproof } from 'use-fireproof'
import { DATABASES, FocusGroup } from '../constants'

export function Sidebar() {
  const { useLiveQuery } = useFireproof(DATABASES.FOCUS_GROUPS)
  const { docs } = useLiveQuery<FocusGroup>('_id')

  return (
    <aside className="fixed h-screen w-64 border-r dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
      <div className="p-4">
        <Link to="/" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 text-lg font-semibold">
          Home
        </Link>
      </div>

      <nav className="px-4 flex-1">
        <h2 className="text-xl font-semibold dark:text-white mb-4">Groups</h2>
        <ul className="space-y-2 list-disc pl-4">
          {docs.map(group => (
            <li key={group._id} className="text-left">
              <Link
                to={`/focus/${group._id}`}
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                {group.name || `${group.product} for ${group.audience}`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t dark:border-gray-700">
        <Link to="/settings" className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">
          Settings
        </Link>
      </div>
    </aside>
  )
}
