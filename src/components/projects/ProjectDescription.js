import React from 'react'
import { Glyphicon } from 'react-bootstrap'

const ProjectDescription = props => (
  <div className='Projects-text'>
    <h2 className='SingleProject-tagline'>
      {props.description}
    </h2>
    <p>Responsible for:</p>
    <ul>
      {props.responsibilities.map(resp => <li><p>{resp}</p></li>)}
    </ul>
    <p>
        <a href={props.urls.repo} target='_blank'><p>GitHub Repo</p></a>
        <a href={props.urls.app} target='_blank'><p>Live App</p></a>
      </p>
    {
      props.mobile
        ? null
        : <p>Play in the sandbox  <Glyphicon glyph='arrow-right' /></p>
    }
    {
      props.showLogin
      ? <p>Log in with email: test@test.test, password: testtest</p>
      : null
    }
  </div>
)

export default ProjectDescription
