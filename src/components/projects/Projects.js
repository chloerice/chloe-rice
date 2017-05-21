import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import animalApparelHome from './animalapparel-home.png'
import bodhiMap from './bodhi-map.png'

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
          {/* desktop/tablet */}
          <Col xsHidden smHidden md={6} lg={6}>
            <div className='projectDemoWrapper'>
              <iframe className='projectDemo' src='https://bodhi.community/'/>
            </div>
          </Col>
          <Col xsHidden smHidden md={6} lg={6}>
            <div className='projectDemoWrapper'>
              <iframe className='projectDemo' src='http://animalapparel.herokuapp.com'/>
            </div>
          </Col>
          {/* mobile */}
          <Col xs={12} sm={6} mdHidden lgHidden>
            <Image
              className='Projects-thumbnail'
              responsive
              alt='Link to project: Bodhi'
              src={bodhiMap}
            />
          </Col>
          <Col xs={12} sm={6} mdHidden lgHidden>
            <Image
              className='Projects-thumbnail'
              responsive
              alt='Link to project: Animal Apparel'
              src={animalApparelHome}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

export default Projects
