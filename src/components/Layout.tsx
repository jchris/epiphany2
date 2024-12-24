import { Outlet } from 'react-router-dom'
import { Sidebar } from './Siderbar'

export function Layout() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1 min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
} 