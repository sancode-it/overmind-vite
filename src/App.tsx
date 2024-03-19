import './App.css'

import { useActions, useAppState } from './overmind'

import React from 'react'
import styled from 'styled-components'

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: turquoise;
  margin-bottom: 45px;
  margin-top: 15px;
`

export function App() {
  const { message1, message2, message3 } = useAppState()
  const actions = useActions()

  const value1 = message1.content
  const value2 = message2.matches('CREATE_MESSAGE_IN_PROGRESS')?.content || ''
  const value3 = message3.matches('CREATE_MESSAGE_IN_PROGRESS')?.content || ''

  return (
    <div className="app">
      <div className="content">
        <Title>Test Overmind</Title>
        <label>
          <span>Message using base state: </span>
          <input
            value={value1}
            onChange={(e) => actions.changeMessageContent1(e.target.value)}
          />
        </label>
        <p>Message 1: {value1 || 'Please type!'}</p>
        <label>
          <span>Message using base state and matches: </span>
          <input
            value={value2}
            onChange={(e) => actions.changeMessageContent2(e.target.value)}
          />
        </label>
        {/* This doesn't work with overmind@next. When printing `message2.content` it works. */}
        <p>Message 2: {value2 || 'Please type!'}</p>
        <label>
          <span>Message using machine state and matches: </span>
          <input
            value={value3}
            onChange={(e) => actions.changeMessageContent3(e.target.value)}
          />
        </label>
        <p>Message 3: {value3 || 'Please type!'}</p>
      </div>
    </div>
  )
}
