import { type Statemachine, statemachine } from 'overmind'

type States =
  | {
      current: 'INITIAL'
    }

type BaseState = {
  message1: MessageMachine
  message2: MessageMachine
  message3: Message3Machine
}

type Events =
  | {
      type: 'STARTED'
    }

export type MessagesMachine = Statemachine<States, Events, BaseState>

export const messages = statemachine<States, Events, BaseState>({
  INITIAL: {
    STARTED: () => ({ current: 'INITIAL' }),
  },
})

type StatesMessage =
  | {
      current: 'MESSAGE_INITIAL'
    }
  | {
      current: 'CREATE_MESSAGE_IN_PROGRESS'
    }

type BaseStateMessage = {
  content: string
}

type EventsMessage = {
  type: 'MESSAGE_TYPED'
  data: string
}

export type MessageMachine = Statemachine<StatesMessage, EventsMessage, BaseStateMessage>

export const message1 = statemachine<StatesMessage, EventsMessage, BaseStateMessage>({
  MESSAGE_INITIAL: {
    MESSAGE_TYPED: (msg, state) => {
      state.content = msg
      return { current: 'CREATE_MESSAGE_IN_PROGRESS' }
    },
  },
  CREATE_MESSAGE_IN_PROGRESS: {
    MESSAGE_TYPED: (msg, state) => {
      state.content = msg
    },
  },
})

export const message2 = statemachine<StatesMessage, EventsMessage, BaseStateMessage>({
  MESSAGE_INITIAL: {
    MESSAGE_TYPED: (msg, state) => {
      state.content = msg
      return { current: 'CREATE_MESSAGE_IN_PROGRESS' }
    },
  },
  CREATE_MESSAGE_IN_PROGRESS: {
    MESSAGE_TYPED: (msg, state) => {
      state.content = msg
    },
  },
})

type StatesMessage3 =
  | {
      current: 'MESSAGE_INITIAL'
    }
  | {
      current: 'CREATE_MESSAGE_IN_PROGRESS'
      content: string
    }

export type Message3Machine = Statemachine<StatesMessage3, EventsMessage>

export const message3 = statemachine<StatesMessage3, EventsMessage>({
  MESSAGE_INITIAL: {
    MESSAGE_TYPED: (msg) => ({
      current: 'CREATE_MESSAGE_IN_PROGRESS',
      content: msg,
    }),
  },
  CREATE_MESSAGE_IN_PROGRESS: {
    MESSAGE_TYPED: (msg) => ({
      current: 'CREATE_MESSAGE_IN_PROGRESS',
      content: msg,
    }),
  },
})

export const state = messages.create(
  { current: 'INITIAL' },
  {
    message1: message1.create(
      { current: 'MESSAGE_INITIAL' },
      { content: '' }
    ),
    message2: message2.create(
      { current: 'MESSAGE_INITIAL' },
      { content: '' }
    ),
    message3: message3.create({ current: 'MESSAGE_INITIAL' }),
  }
)
