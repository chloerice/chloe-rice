import React from 'react'
import { Row, Col } from 'react-bootstrap'

import SocialIcon from './SocialIcon'
import { Mail, GitHub, LinkedIn, Twitter, Instagram } from './socialIcons'
import './Footer.css'

const SocialNav = () => (
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
      <div className="icon-wrapper">
        <SocialIcon
          href="https://www.linkedin.com/in/chloemrice"
          svg={<LinkedIn />}
          altText="Go to Chloe's LinkedIn"
        />
        <SocialIcon
          href="mailto:hello@chloe-rice.com"
          svg={<Mail />}
          altText="Email Chloe"
        />
        <SocialIcon
          href="https://www.github.com/chloerice"
          svg={<GitHub />}
          altText="Go to Chloe's GitHub"
        />
        <SocialIcon
          href="https://www.instagram.com/opensourcechloe"
          svg={<Instagram />}
          altText="Go to Chloe's Instagram"
        />
        <SocialIcon
          href="https://www.twitter.com/opensourcechloe"
          svg={<Twitter />}
          altText="Go to Chloe's Twitter"
        />
      </div>
    </Col>
  </Row>
)

export default SocialNav
