import subject from './subject'

export default (payload, synthEvt) => {
  // payload = { name , data , preventDefault }
  if (synthEvt) {
    if (payload.preventDefault) synthEvt.preventDefault()
    Object.assign(payload, { synthEvt })
  }
  subject.onNext(payload)
}
