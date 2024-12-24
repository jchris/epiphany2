export const DATABASES = {
  FOCUS_GROUPS: 'focus-groups'
} as const

export type FocusGroup = {
  product: string
  audience: string
  name?: string
  created: number
}