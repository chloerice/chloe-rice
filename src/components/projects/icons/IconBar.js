import React from 'react'
import PropTypes from 'prop-types'

import './IconBar.css'

const SVGIconBar = ({icons}) => (
  <div className='project-icons'>
    {
      icons.map((icon, i) => (
        <a key={i} href={icon.url} target='_blank' className={`project-icon`}>
          <span className='sr-only'>{icon.text}</span>
          {icon.component}
        </a>
      ))
    }
  </div>
)

SVGIconBar.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object)
  /* ^ icon objects should have the following structure:
    {
      text: 'Github Profile', // sr-only description of icon link destination
      component: <GithubIcon />, // a React component with stripped down SVG code
      url: 'https://github.com/chloerice'
    }
  */
}

export default SVGIconBar
