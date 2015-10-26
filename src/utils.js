import subject from './subject'

export const publish = (payload, synthEvt) => {
  if (payload.preventDefault) synthEvt.preventDefault()
  subject.onNext(Object.assign(payload, { synthEvt }))
}
