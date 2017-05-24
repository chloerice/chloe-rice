import React from 'react'
import ReactDOM from 'react-dom'
import ProjectDescription from './ProjectDescription'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProjectDescription />, div)
})
