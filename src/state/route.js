import subject from '../lib/subject'
import { getRoute$ } from '../lib/observables'

const pushState$ = subject
  .filter(evt => evt.name === 'navigate')
  .map(evt => evt.route)

export default getRoute$(pushState$)
