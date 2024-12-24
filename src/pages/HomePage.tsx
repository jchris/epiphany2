import { FocusGroupForm } from '../components/FocusGroupForm'

export function HomePage() {
  return (
    <>
      <h1 className="block py-2 dark:text-gray-200 text-lg font-semibold">Welcome</h1>
      <p>
        You can create a new focus group here by filling in a product and audience below.
      </p>
      <FocusGroupForm />
    </>
  )
} 