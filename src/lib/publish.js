import subject from './subject'

export default (payload, synthEvt) => {
  if (payload.preventDefault) synthEvt.preventDefault()
  subject.onNext(Object.assign(payload, { synthEvt }))
}
