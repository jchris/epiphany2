import { Link } from 'react-router-dom'

export interface Group {
  id: number
  name: string
}

const groups: Group[] = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  { id: 3, name: 'Group 3' },
]
export function Sidebar() {
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
          {groups.map(group => (
            <li key={group.id} className="text-left">
              <Link
                to={`/focus/${group.id}`}
                className="block py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200"
              >
                {group.name}
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
