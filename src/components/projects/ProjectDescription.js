import React from 'react'
import { Glyphicon } from 'react-bootstrap'

const ProjectDescription = props => (
  <div className='Projects-text'>
    <h2 className='SingleProject-tagline'>
      {props.description}
    </h2>
    <p>Responsible for:</p>
    <ul>
      {props.responsibilities.map((resp, idx) => <li key={idx}><p>{resp}</p></li>)}
    </ul>
    {
      !props.mobile && 
      <p>
        {`Play in the sandbox with `} 
        {`email `}<strong>test@test.test</strong>
        {` and password `}<strong>test </strong>     
        <Glyphicon glyph='arrow-right' />
      </p>
    }
  </div>
)

export default ProjectDescription
