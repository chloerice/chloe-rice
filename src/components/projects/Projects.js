import React from 'react'
import { Row, Col } from 'react-bootstrap'

import SingleProject from './SingleProject'
import { colorForCode } from './project-data'
import c4cHome from './colorforcode-home.jpg'

import './Projects.css'

const c4c = colorForCode()

const Projects = props => (
  <Row id='Projects'>
    <Col xs={12} sm={12} md={12} lg={12}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 className='Projects-header'>Latest Projects</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <SingleProject
            name="Color for Code"
            showLogin
            screenshot={c4cHome}
            urls={c4c.urls}
            description={c4c.description}
            responsibilities={c4c.responsibilities}
          />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Projects
