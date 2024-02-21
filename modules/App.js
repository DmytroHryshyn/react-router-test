import React from 'react'
import { Link } from 'react-router'

import { HashRouter, Route as FutureRoute, Switch } from 'react-router-dom'
import Repos from './Repos'
export function App(props) {
  console.log('legacy app props', props)
  return (
    <div>
      <h1>THIS IS APP</h1>
      {props.children}
    </div>
  )
}

export function App1(props) {
  console.log(props)
  return (
    <div>
      <h1>THIS IS APP1</h1>
      {props.children}
    </div>
  )
}