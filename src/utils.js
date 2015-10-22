import subject from './subject'

export const publish = (payload, synthEvt) => subject.onNext(Object.assign(payload, { synthEvt }))
