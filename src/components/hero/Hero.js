import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'

import meEyesForward from '../../img/me-eyes-forward.svg'
import meEyesLooking from '../../img/me-eyes-looking.svg'
import macBook from '../../img/macbook-focus.svg'
import hippoTwirl from '../../img/twirl-focus.svg'
// import fruit from '../../img/fruit-focus.svg'
// import bike from '../../img/bike-focus.svg'
// import sewingMachine from '../../img/sewing-machine-focus.svg'
// import huskyRay from '../../img/ray-focus.svg'
import './Hero.css'

export default class Hero extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hovering: false,
      thing: ''
    }
  }

  chloeLookRight = thing => event => {
    this.setState({thing: thing, hovering: true})
  }

  chloeLookForward = thing => event => {
    this.setState({thing: thing, hovering: false})
  }

  render() {
  
    return (
      <Row id='Home'>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Row>
            <Col xs={6} sm={6} md={6} lg={6}>
              {
                this.state.hovering
                ? <Image
                    className='me-eyes-looking Hero-illustration'
                    responsive
                    src={meEyesLooking}
                    alt='An illustrated self-portrait of Chloé.'
                  />
                : <Image
                    className='me-eyes-forward Hero-illustration'
                    responsive
                    src={meEyesForward}
                    alt='An illustrated self-portrait of Chloé.'
                  />
              }
            </Col>
            <Col xs={6} sm={6} md={6} lg={6}>
              <Image
                  onMouseEnter={this.chloeLookRight('macbook')}
                  onMouseLeave={this.chloeLookForward('macbook')}
                  onTouchStart={this.chloeLookRight('macbook')}
                  onTouchEnd={this.chloeLookForward('macbook')}
                  className='macbook Hero-illustration'
                  responsive
                  src={macBook}
                  alt='An illustrated Macbook Pro with text editor and terminal on screen.'
                />
                <h2 className='Hero-text'>
                  I'm a full stack web developer, specializing in building delightful user experiences for web and mobile with React.
                </h2>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}
