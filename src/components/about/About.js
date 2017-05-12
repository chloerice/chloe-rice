import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import './About.css'
import mobileIllustration from '../../img/mobile-about.svg'

const About = props => (
  <Row id='About'>
    <Col xs={12} sm={12} md={12} lg={12}>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <h1 className='About-header'>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <p className='About-text'>
            I believe in a free and open web, growing food over lawns, 80s workout tapes over gyms, bikes over cars, and never wearing pants you can’t do a roundhouse kick in.
          </p>
          <p className='About-text'>
            When I’m not coding, I love creating whimsical landscapes, undercover unitards, and vegan deliciousness for the obscurely allergic. I’m also one of those crazy people that runs far in the wilderness for no good reason.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='mobile-illustration' xs={12} smHidden mdHidden lgHidden>
          <Image
            responsive
            src={mobileIllustration}
            alt='An illustration of some of Chloe`s favorites: her dogs Twirl and Ray, her sewing vintage Singer machine and bike, her MacBook, and an assortment of fruit.'
          />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default About
