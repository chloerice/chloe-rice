import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import meEyesForward from '../../img/me-eyes-forward.svg'
import meEyesLooking from '../../img/me-eyes-looking.svg'
import macBook from '../../img/macbook.svg'
import mobileHero from '../../img/mobile-hero.svg'
import './Hero.css'

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
      <Row id='Home'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
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

            {/* DESKTOP */}
            <Col className='Hero-illustration' xsHidden smHidden md={6} lg={6}>
              <Image
                onMouseEnter={this.chloeLookRight}
                onMouseLeave={this.chloeLookForward}
                onTouchStart={this.chloeLookRight}
                onTouchEnd={this.chloeLookForward}
                className='Hero-illustration'
                responsive
                src={macBook}
                alt='An interactive illustration of Chloe and her MacBook.'
              />
              <h2 className='Hero-text'>Oh hai, I'm Chloé!</h2>
              <h2 className='Hero-text'>
                I build delightfully interactive user experiences for the web. My specialities are Node.js and React.js.
              </h2>
            </Col>

            {/* TABLET */}
            <Col xsHidden sm={6} mdHidden lgHidden>
              <Image
                className='tablet-Hero-illustration'
                onMouseEnter={this.chloeLookRight}
                onMouseLeave={this.chloeLookForward}
                onTouchStart={this.chloeLookRight}
                onTouchEnd={this.chloeLookForward}
                responsive
                src={macBook}
                alt='An interactive illustration of Chloe and her MacBook.'
              />
            </Col>
            <Col xsHidden sm={12} mdHidden lgHidden>
              <h2 className='tablet Hero-text'>Oh hai, I'm Chloé!</h2>
              <h2 className='tablet Hero-text'>
                I build delightfully interactive user experiences for the web. My specialities are Node.js and React.js.
              </h2>
            </Col>

            {/* MOBILE*/}
            <Col className='mobile-Hero-illustration' xs={12} smHidden mdHidden lgHidden>
              <Image
                responsive
                src={mobileHero}
                alt='An interactive illustration of Chloe and her MacBook.'
              />
              <h2 className='mobile Hero-text'>Oh hai, I'm Chloé!</h2>
              <h2 className='mobile Hero-text'>
                I build delightfully interactive user experiences for the web. My specialities are Node.js and React.js.
              </h2>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
