import React from 'react'
import { Row, Col } from 'react-bootstrap'
import animalApparelHome from './animalapparel-home.png'
import bodhiMap from './bodhi-map.png'
import './Projects.css'
import SingleProject from './SingleProject'
import { bodhi, animalApparel } from './project-data'

const b = bodhi()
const aa = animalApparel()

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
            name='Bodhi'
            screenshot={bodhiMap}
            showLogin={true}
            urls={b.urls}
            description={b.description}
            responsibilities={b.responsibilities}
          />
          <SingleProject
            name='Animal Apparel'
            showLogin={false}
            screenshot={animalApparelHome}
            urls={aa.urls}
            description={aa.description}
            responsibilities={aa.responsibilities}
          />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Projects
