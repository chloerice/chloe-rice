import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './Projects.css'

const Projects = props => (
  <div>
    <Row id='Projects'>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className='Projects-header'>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <h2 className='Projects-text'>
            </h2>
          </Col>
          <Col className='Projects-demo' xs={12} sm={6} md={6} lg={6}>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

export default Projects
