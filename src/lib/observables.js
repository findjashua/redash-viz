import { Observable } from 'rx-lite'

export const getRoute$ = pushState$ => {
  pushState$.subscribe(route => window.history.pushState(null, null, route))

  const popState$ = Observable
    .fromEvent(window, 'popstate')
    .map(evt => window.location.pathname)

  return Observable.merge(pushState$, popState$)
    .startWith(window.location.pathname)
}
