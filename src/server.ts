import { fireproof } from 'use-fireproof'
import { DATABASES, FocusGroup } from './constants'

const groups = fireproof(DATABASES.FOCUS_GROUPS)

groups.subscribe((events: FocusGroup[]) => {
  console.log('database event', events)
}, true)