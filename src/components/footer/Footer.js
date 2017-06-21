import React from 'react'
import { Row, Col, Glyphicon } from 'react-bootstrap'
import SocialNav from './SocialNav'
import './Footer.css'
import resume from '../../../public/ChloeRice.pdf'

const Footer = () => (
  <footer>
    <Row id='Contact'>
      <Col xs={12} sm={12} md={12} lg={12}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <h1 className='Contact-header'>Hire Me</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p className='Contact-text'>
              I’m currently looking for a team to learn from and solve problems with. If you're cross-functional and user-centered, I'm interested.
            </p>
            <p className='Contact-text'>
              Looking for someone gritty and meticulous? I'm that somebody. <a href={resume} target='_blank'>This</a> is me on paper, but <a href='https://www.github.com/chloerice' target='_blank'>my code</a> is a far more compelling read.
            </p>
            <p className='Contact-text'>
              I’m always on the lookout for side projects that matter and good conversation. Let’s talk!
            </p>
          </Col>
        </Row>
        <SocialNav />
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <p>
              Coded & Illustrated with
              <Glyphicon glyph='heart'>
                <span className='sr-only'>love</span>
              </Glyphicon>
              by Chloé Rice
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
)

export default Footer
