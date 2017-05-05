import React, { Component } from 'react'
import { Row, Glyphicon, Image } from 'react-bootstrap'
import './Footer.css'
import twitter from '../../img/twitter.svg'
import twitterHover from '../../img/twitter-hover.svg'
import github from '../../img/github.svg'
import githubHover from '../../img/github-hover.svg'
import linkedIn from '../../img/linkedin.svg'
import linkedInHover from '../../img/linkedin-hover.svg'
import instagram from '../../img/instagram.svg'
import instagramHover from '../../img/instagram-hover.svg'
import mail from '../../img/mail.svg'
import mailHover from '../../img/mail-hover.svg'

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
    let hovering = this.state.hovering
    return (
      <Row id='Contact'>
        <footer>
          <div className="icon-wrapper">
            <a id='linked-in' href="https://www.linkedin.com/in/chloemrice" target="_blank">
              <Image
                className="icon"
                src={this.state.linkedInHover ? linkedInHover : linkedIn}
                alt="link to Chloe's LinkedIn profile"
                onMouseEnter={this.handleHover('linkedIn')}
                onMouseLeave={this.handleHover('linkedIn')}
              />
            </a>
            <a id='mail' href="mailto:chloe.mi.rice@gmail.com">
              <Image
                className="icon"
                src={this.state.mailHover ? mailHover : mail}
                alt="link to Chloe's email"
                onMouseEnter={this.handleHover('mail')}
                onMouseLeave={this.handleHover('mail')}
              />
            </a>
            <a id='github' href="https://www.github.com/chloerice" target="_blank">
              <Image
                className="icon"
                src={this.state.githubHover ? githubHover : github}
                alt="link to Chloe's GitHub repositories"
                onMouseEnter={this.handleHover('github')}
                onMouseLeave={this.handleHover('github')}
              />
            </a>
            <a id='instagram' href="https://www.instagram.com/crudifrutti" target="_blank">
              <Image
                className="icon"
                src={this.state.instagramHover ? instagramHover : instagram}
                alt="link to Chloe's Instagram account"
                onMouseEnter={this.handleHover('instagram')}
                onMouseLeave={this.handleHover('instagram')}
              />
            </a>
            <a id='twitter' href="https://www.twitter.com/theunifarmer" target="_blank">
              <Image
                className="icon"
                src={this.state.twitterHover ? twitterHover : twitter}
                alt="link to Chloe's Twitter account"
                onMouseEnter={this.handleHover('twitter')}
                onMouseLeave={this.handleHover('twitter')}
              />
            </a>
          </div>
          <p>
            Made with
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
