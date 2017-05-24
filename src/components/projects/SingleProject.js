import React from 'react'
import { Row, Col, Thumbnail } from 'react-bootstrap'
import ProjectDescription from './ProjectDescription'

import './Projects.css'

const SingleProject = props => (
  <Row>
    {/* desktop/tablet */}
    <Col xsHidden smHidden md={6} lg={6}>
      <h1 className='SingleProject-title'>{props.name}</h1>
      <ProjectDescription
        mobile={false}
        showLogin={props.showLogin}
        urls={props.urls}
        description={props.description}
        responsibilities={props.responsibilities}
      />
    </Col>
    <Col className='SingleProject-demo' xsHidden smHidden md={6} lg={6}>
      <div className='projectSandboxWrapper'>
        <iframe className='projectSandbox' src={props.urls.app}/>
      </div>
    </Col>

    {/* mobile */}
    <Col xs={12} sm={6} mdHidden lgHidden>
      <h1 className='SingleProject-title'>{props.name}</h1>
      <ProjectDescription
        mobile={true}
        showLogin={props.showLogin}
        urls={props.urls}
        description={props.description}
        responsibilities={props.responsibilities}
      />
    </Col>
    <Col xs={12} sm={6} mdHidden lgHidden>
      <Thumbnail
        className='Projects-thumbnail'
        responsive
        href={props.urls.app}
        alt={`Photo of and link to project: ${props.name}`}
        src={props.screenshot}
      />
    </Col>
  </Row>
)

export default SingleProject
