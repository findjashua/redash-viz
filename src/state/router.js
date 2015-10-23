import subject from '../subject'

export default subject
  .filter(evt => evt.name === 'navigate')
  .map(evt => {
    return { route: evt.route }
  })
  .startWith({ route: '/queries' })
