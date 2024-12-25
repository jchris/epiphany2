import { fireproof } from 'use-fireproof'
import { DATABASES, FocusGroup } from './constants'
import { connect } from '@fireproof/cloud'

const groups = fireproof(DATABASES.FOCUS_GROUPS)

connect(groups)

groups.subscribe((events: FocusGroup[]) => {
  console.log('database event', events)
}, true)

