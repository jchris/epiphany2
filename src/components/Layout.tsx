import { Link, Outlet } from 'react-router-dom'

export interface Group {
  id: number
  name: string
}

// You might want to move this to a separate file or fetch from an API
const groups: Group[] = [
  { id: 1, name: 'Group 1' },
  { id: 2, name: 'Group 2' },
  { id: 3, name: 'Group 3' },
]

export function Layout() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ 
        width: '250px', 
        padding: '20px',
        borderRight: '1px solid #ccc',
        minHeight: '100vh'
      }}>
        <h2>Groups</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            {groups.map(group => (
              <li key={group.id}>
                <Link to={`/focus/${group.id}`}>
                  {group.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      
      <main style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  )
} 