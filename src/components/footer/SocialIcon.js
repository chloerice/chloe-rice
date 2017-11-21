import React from 'react'

import './Footer.css'

const SocialIcon = props => (
  <a className='icon' href={props.href} target="_blank">
    <span className='sr-only'>{props.altText}</span>
    {props.svg}
  </a>
)

export default SocialIcon
