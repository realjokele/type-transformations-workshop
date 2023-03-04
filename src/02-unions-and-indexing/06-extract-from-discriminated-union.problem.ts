import { Equal, Expect } from '../helpers/type-utils'

export type Event =
  | {
      type: 'click'
      event: MouseEvent
    }
  | {
      type: 'focus'
      event: FocusEvent
    }
  | {
      type: 'keydown'
      event: KeyboardEvent
    }

type ClickEvent_event = Extract<Event, { event: MouseEvent }>
type ClickEvent_type = Extract<Event, { type: 'click' }>

type tests = [Expect<Equal<ClickEvent, { type: 'click'; event: MouseEvent }>>]
