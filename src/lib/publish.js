import subject from './subject'

export default (payload, synthEvt) => {
  if (synthEvt) {
    if (payload.preventDefault) synthEvt.preventDefault()
    Object.assign(payload, { synthEvt })
  }
  subject.onNext(payload)
}
