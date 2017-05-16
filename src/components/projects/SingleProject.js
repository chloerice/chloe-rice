import React from 'react'
import { Row, Col, Image, Carousel } from 'react-bootstrap'

import './Projects.css'

const SingleProject = props => (
  <div>
    <Row>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className='SingleProject-header'>{props.name}</h1>
          </Col>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Image />
            </Carousel.Item>
            <Carousel.Item>
              <Image />
            </Carousel.Item>
            <Carousel.Item>
              <Image />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <h2 className='SingleProject-text'>
              {props.description}
            </h2>
          </Col>
          <Col className='SingleProject-demo' xs={12} sm={6} md={6} lg={6}>
            <a href={props.repoUrl}><p>Repo</p></a>
            <a href={props.liveUrl}><p>View Live</p></a>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
)

export default SingleProject
