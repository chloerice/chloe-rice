import React from 'react'
import { Image } from 'react-bootstrap'

import './Footer.css'

const SocialIcon = props => (
  <a id={props.name} href={props.href} target="_blank">
    <Image
      className="icon"
      src={props.hovering ? props.src.hoverIcon : props.src.icon}
      alt={props.altText}
      onMouseEnter={props.handleHover(`${props.name}`)}
      onMouseLeave={props.handleHover(`${props.name}`)}
    />
  </a>
)

export default SocialIcon
