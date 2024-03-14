import { Context } from '.'

export const changeMessageContent1 = ({ state }: Context, content: string) => {
  state.message1.send('MESSAGE_TYPED', content)
}

export const changeMessageContent2 = ({ state }: Context, content: string) => {
  state.message2.send('MESSAGE_TYPED', content)
}

export const changeMessageContent3 = ({ state }: Context, content: string) => {
  state.message3.send('MESSAGE_TYPED', content)
}
