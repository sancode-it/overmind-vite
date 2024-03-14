import * as actions from './actions'

import {
  createActionsHook,
  createReactionHook,
  createStateHook,
} from 'overmind-react'

import { IContext } from 'overmind'
import { state } from './state'

export const config = {
  state,
  actions
}

export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useReaction = createReactionHook<Context>()
