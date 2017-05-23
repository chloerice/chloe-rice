import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import SocialIcon from './SocialIcon'
import './Footer.css'
import twitter from '../../img/social/twitter.svg'
import twitterHover from '../../img/social/twitter-hover.svg'
import github from '../../img/social/github.svg'
import githubHover from '../../img/social/github-hover.svg'
import linkedIn from '../../img/social/linkedin.svg'
import linkedInHover from '../../img/social/linkedin-hover.svg'
import instagram from '../../img/social/instagram.svg'
import instagramHover from '../../img/social/instagram-hover.svg'
import mail from '../../img/social/mail.svg'
import mailHover from '../../img/social/mail-hover.svg'

export default class SocialNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      linkedInHover: false,
      mailHover: false,
      githubHover: false,
      instagramHover: false,
      twitterHover: false
    }
  }

  handleHover = name => event => {
    const iconState = {[`${name}Hover`]: !this.state[`${name}Hover`]}
    this.setState(iconState)
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <div className="icon-wrapper">
            <SocialIcon
              name="linkedIn"
              href="https://www.linkedin.com/in/chloemrice"
              hovering={this.state.linkedInHover}
              src={{hoverIcon: linkedInHover, icon: linkedIn}}
              altText="a link to Chloe's LinkedIn profile"
              handleHover={this.handleHover}
            />
            <SocialIcon
              name="mail"
              href="mailto:hello@chloe-rice.com"
              hovering={this.state.mailHover}
              src={{hoverIcon: mailHover, icon: mail}}
              altText="a link to email Chloe"
              handleHover={this.handleHover}
            />
            <SocialIcon
              name="github"
              href="https://www.github.com/chloerice"
              hovering={this.state.githubHover}
              src={{hoverIcon: githubHover, icon: github}}
              altText="a link to Chloe's GitHub repositories"
              handleHover={this.handleHover}
            />
            <SocialIcon
              name="instagram"
              href="https://www.instagram.com/crudifrutti"
              hovering={this.state.instagramHover}
              src={{hoverIcon: instagramHover, icon: instagram}}
              altText="a link to Chloe's Instagram account"
              handleHover={this.handleHover}
            />
            <SocialIcon
              name="twitter"
              href="https://www.twitter.com/theunifarmer"
              hovering={this.state.twitterHover}
              src={{hoverIcon: twitterHover, icon: twitter}}
              altText="a link to Chloe's Instagram account"
              handleHover={this.handleHover}
            />
          </div>
        </Col>
      </Row>
    )
  }
}
