import { Observable } from 'rx-lite'

import subject from '../subject'

const pushState$ = subject
  .filter(evt => evt.name === 'navigate')
  .map(evt => evt.route)

pushState$
  .subscribe(route => window.history.pushState(null, null, route))

const popState$ = Observable
  .fromEvent(window, 'popstate')
  .map(evt => window.location.pathname)

export default Observable.merge(pushState$, popState$)
  .startWith(window.location.pathname)
