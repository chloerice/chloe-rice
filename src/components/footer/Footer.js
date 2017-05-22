import React, { Component } from 'react'
import { Row, Col, Glyphicon, Image } from 'react-bootstrap'

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
import resume from '../../../public/Chloe_Rice.pdf'

export default class Footer extends Component {
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
      <Row id='Contact'>
        <footer>
          <p className='Contact-text'>
            I’m looking for a collaborative, cross-functional, user-centered team to learn from and solve problems with. <a href={resume} target='_blank'>This</a> is me on paper.
          </p>
          <p className='Contact-text'>
            I’m always on the lookout for side projects that matter and good conversation. Don’t hesitate to reach out!
          </p>
          <div className="icon-wrapper">
            <a id='linked-in' href="https://www.linkedin.com/in/chloemrice" target="_blank">
              <Image
                className="icon"
                src={this.state.linkedInHover ? linkedInHover : linkedIn}
                alt="a link to Chloe's LinkedIn profile"
                onMouseEnter={this.handleHover('linkedIn')}
                onMouseLeave={this.handleHover('linkedIn')}
              />
            </a>
            <a id='mail' href="mailto:hello@chloe-rice.com">
              <Image
                className="icon"
                src={this.state.mailHover ? mailHover : mail}
                alt="a link to email Chloe"
                onMouseEnter={this.handleHover('mail')}
                onMouseLeave={this.handleHover('mail')}
              />
            </a>
            <a id='github' href="https://www.github.com/chloerice" target="_blank">
              <Image
                className="icon"
                src={this.state.githubHover ? githubHover : github}
                alt="a link to Chloe's GitHub repositories"
                onMouseEnter={this.handleHover('github')}
                onMouseLeave={this.handleHover('github')}
              />
            </a>
            <a id='instagram' href="https://www.instagram.com/crudifrutti" target="_blank">
              <Image
                className="icon"
                src={this.state.instagramHover ? instagramHover : instagram}
                alt="a link to Chloe's Instagram account"
                onMouseEnter={this.handleHover('instagram')}
                onMouseLeave={this.handleHover('instagram')}
              />
            </a>
            <a id='twitter' href="https://www.twitter.com/theunifarmer" target="_blank">
              <Image
                className="icon"
                src={this.state.twitterHover ? twitterHover : twitter}
                alt="a link to Chloe's Twitter account"
                onMouseEnter={this.handleHover('twitter')}
                onMouseLeave={this.handleHover('twitter')}
              />
            </a>
          </div>
          <p>
            Coded & Illustrated with
            <Glyphicon glyph='heart'>
              <span className='sr-only'>love</span>
            </Glyphicon>
            by Chloé Rice
          </p>
        </footer>
      </Row>
    )
  }
}
