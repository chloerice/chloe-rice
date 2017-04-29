import React from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

/*
  The .active class was being applied to '/' even when it wasn't the current
  location.pathname because all other paths are its children. This method
  corrects for that
*/
const onlyOneActiveMatch = (match, location) => {
  if (match) return location.pathname === match.path
}

const App = props => (
  <div className='App'>
    <nav>
      <ul className='navbar'>
        <li className='navbar-item'>
          <NavLink to='/blog' isActive={onlyOneActiveMatch}>Blog</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/projects' isActive={onlyOneActiveMatch}>Projects</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/about' isActive={onlyOneActiveMatch}>About</NavLink>
        </li>
        <li className='navbar-item'>
          <NavLink to='/' isActive={onlyOneActiveMatch}>Home</NavLink>
        </li>
      </ul>
    </nav>
    { props.children && React.cloneElement(props.children, props) }
  </div>
)

export default App
