import subject from './subject'

export default (payload, synthEvt) => {
  if (payload.preventDefault) synthEvt.preventDefault()
  if (synthEvt) Object.assign(payload, { synthEvt })
  subject.onNext(payload)
}
