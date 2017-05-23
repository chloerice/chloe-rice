import React, { Component } from 'react'
import { Row, Col, Carousel } from 'react-bootstrap'

import './Projects.css'

export default class SingleProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      direction: null
    }
  }

  handleSelect = (index, event) => {
    const {direction} = event
    this.setState({index, direction})
  }

  render() {
    return (
      <Carousel.Item>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <h1 className='SingleProject-header'>{this.props.name}</h1>
            <h2 className='SingleProject-text'>
              {this.props.description}
            </h2>
          </Col>
          {/* desktop/tablet */}
          <Col className='SingleProject-demo' xsHidden sm={6} md={6} lg={6}>
            <a href={this.props.repoUrl}><p>GitHub Repo</p></a>
            <a href={this.props.liveUrl}><p>Live App</p></a>
            <div className='projectSandboxWrapper'>
              <iframe className='projectSandbox' src='https://bodhi.community/'/>
            </div>
          </Col>
          {/* mobile */}
          <Col xs={12} smHidden mdHidden lgHidden>
            <Image
              className='Projects-thumbnail'
              responsive
              alt='Link to project: Animal Apparel'
              src={this.props.screenshot}
            />
          </Col>
        </Row>
      </Carousel.Item>
    )
  }
}
