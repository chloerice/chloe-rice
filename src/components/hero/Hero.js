import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import meEyesForward from '../../img/me-eyes-forward.svg'
import meEyesLooking from '../../img/me-eyes-looking.svg'
import macBook from '../../img/macbook.svg'
import mobileHero from '../../img/mobile-hero.svg'
import './Hero.css'
import resume from '../../../public/Chloe_Rice.pdf'

export default class Hero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
  }

  chloeLookRight = event => {
    this.setState({hovering: true})
  }

  chloeLookForward = event => {
    this.setState({hovering: false})
  }

  render() {

    return (
      <Row id='Hero'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <Col className='mobile-Hero-illustration' xs={12} smHidden mdHidden lgHidden>
              <Image
                responsive
                src={mobileHero}
                alt='An interactive illustration of some of Chloe`s favorite things: her dogs Twirl and Ray, her sewing machine, bike, MacBook, and an assortment of fruit.'
              />
              <p className='mobile Hero-text'>
                I build delightfully fast and interactive user experiences for web and mobile. My specialties are Node.js and React.js.
              </p>
              <p className='mobile Hero-text'>
                I’m looking for a collaborative, cross-functional, user-centered team to learn from and solve problems with in NY or CA. <a href={resume} target='_blank'>This</a> is me on paper.
              </p>
              <p className='mobile Hero-text'>
                I’m always on the lookout for side projects that matter and good conversation. Don’t hesitate to reach out!
              </p>
            </Col>

            <Col className='Hero-illustration' xsHidden sm={6} md={6} lg={6}>
              {
                this.state.hovering
                ? <Image
                    className='me-eyes-looking'
                    responsive
                    src={meEyesLooking}
                    alt='An illustrated self-portrait of Chloé.'
                  />
                : <Image
                    className='me-eyes-forward'
                    responsive
                    src={meEyesForward}
                    alt='An illustrated self-portrait of Chloé.'
                  />
              }
            </Col>

            <Col className='Hero-illustration' xsHidden smHidden md={6} lg={6}>
              <Image
                onMouseEnter={this.chloeLookRight}
                onMouseLeave={this.chloeLookForward}
                onTouchStart={this.chloeLookRight}
                onTouchEnd={this.chloeLookForward}
                className='Hero-illustration'
                responsive
                src={macBook}
                alt='An interactive illustration of some of Chloe`s favorite things: her dogs Twirl and Ray, her sewing machine, bike, MacBook, and an assortment of fruit.'
              />
              <p className='Hero-text'>
                As a full stack developer, I build delightfully fast and interactive user experiences for web and mobile. My specialities are Node.js and React.js.
              </p>
              <p className='Hero-text'>
                I’m looking for a collaborative, cross-functional, user-centered team to learn from and solve problems with in New York. <a href={resume}>This</a> is me on paper.
              </p>
              <p className='Hero-text'>
                I’m always on the lookout for side projects that matter and good conversation. Don’t hesitate to reach out!
              </p>
            </Col>

            <Col className='tablet-Hero-illustration' xsHidden sm={6} mdHidden lgHidden>
              <Image
                onMouseEnter={this.chloeLookRight}
                onMouseLeave={this.chloeLookForward}
                onTouchStart={this.chloeLookRight}
                onTouchEnd={this.chloeLookForward}
                className='Hero-illustration'
                responsive
                src={macBook}
                alt='An interactive illustration of some of Chloe`s favorite things: her dogs Twirl and Ray, her sewing machine, bike, MacBook, and an assortment of fruit.'
              />
            </Col>
            <Col className='tablet-Hero-illustration' xsHidden sm={12} mdHidden lgHidden>
              <p className='tablet Hero-text'>
                As a full stack developer, I build delightfully fast and interactive user experiences for web and mobile. My specialities are Node.js and React.js.
              </p>
              <p className='tablet Hero-text'>
                I’m looking for a collaborative, cross-functional, user-centered team to learn from and solve problems with in New York. <a href={resume}>This</a> is me on paper.
              </p>
              <p className='tablet Hero-text'>
                I’m always on the lookout for side projects that matter and good conversation. Don’t hesitate to reach out!
              </p>
            </Col>

          </Row>
        </Col>
      </Row>
    )
  }
}
