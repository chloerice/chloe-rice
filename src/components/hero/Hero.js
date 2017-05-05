import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import meEyesForward from '../../img/me-eyes-forward.svg'
import meEyesLooking from '../../img/me-eyes-looking.svg'
import heroIllustration from '../../img/macbook-center.svg'
import mobileHeroIllustration from '../../img/mobile-hero.svg'

const heroText = {
  twirl: "When I'm not coding, I love...dancing with my hippo colored dog Twirl.",
  ray: "When I'm not coding, I love...running trails with my husky Ray.",
  bike: "When I'm not coding, I love...riding my bike everywhere--near and far.",
  fruit: "When I'm not coding, I love...eating, growing and hunting for fruit.",
  sewing: "When I'm not coding, I love...making clothes (ask me about unitards!).",
  macbook: "As a full stack web developer, I specialize in building delightful user experiences for web and mobile with React."
}

import './Hero.css'

export default class Hero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
  }

  chloeLookRight = thing => event => {
    this.setState({hovering: true})
  }

  chloeLookForward = thing => event => {
    this.setState({hovering: false})
  }

  render() {

    return (
      <Row id='Home'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <Col className='mobile-Hero-illustration' xs={12} sm={12} mdHidden lgHidden>
              <Image
                  onMouseEnter={this.chloeLookRight('macbook')}
                  onMouseLeave={this.chloeLookForward('macbook')}
                  onTouchStart={this.chloeLookRight('macbook')}
                  onTouchEnd={this.chloeLookForward('macbook')}
                  responsive
                  src={mobileHeroIllustration}
                  alt='An interactive illustration of some of Chloe`s favorite things: her dogs Twirl and Ray, her sewing machine, bike, MacBook, and an assortment of fruit.'
                />
                <h2 className='mobile-Hero-text'>
                  {heroText.macbook}
                </h2>
            </Col>

            <Col className='Hero-illustration' xsHidden smHidden md={6} lg={6}>
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
                  onMouseEnter={this.chloeLookRight('macbook')}
                  onMouseLeave={this.chloeLookForward('macbook')}
                  onTouchStart={this.chloeLookRight('macbook')}
                  onTouchEnd={this.chloeLookForward('macbook')}
                  className='Hero-illustration'
                  responsive
                  src={heroIllustration}
                  alt='An interactive illustration of some of Chloe`s favorite things: her dogs Twirl and Ray, her sewing machine, bike, MacBook, and an assortment of fruit.'
                />
                <h2 className='Hero-text'>
                  {heroText.macbook}
                </h2>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
