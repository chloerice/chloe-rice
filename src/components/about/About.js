import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './About.css'

const About = props => (
  <Row id='About'>
    <Col xs={12} sm={12} md={12} lg={12}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 className='About-header'>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <h2 className='About-text'>
          </h2>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default About
