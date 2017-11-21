import React from 'react'
import { Row, Col, Thumbnail } from 'react-bootstrap'

import ProjectDescription from './ProjectDescription'
import IconBar from './icons/IconBar'
import GitHub from './icons/GitHubIcon'
import Link from './icons/LinkIcon'

import './Projects.css'

const isXL = window.innerHeight >= "1600px"
const icons = [
  {
    text: 'Go to the Color for Code GitHub repo',
    component: <GitHub />,
    url: 'https://github.com/jackson-/colorforcode'
  },
  {
    text: 'Go to the live app',
    component: <Link />,
    url: 'https://www.colorforcode.com'
  }
]

const SingleProject = props => (
  <Row>
    {/* desktop/tablet */}
    <Col xsHidden smHidden md={6} lg={isXL ? 8 : 7}>
      <div className='container-flex'>
        <h1 className='SingleProject-title'>{props.name}</h1>
        <IconBar icons={icons} />
      </div>
      <ProjectDescription
        showLogin={props.showLogin}
        urls={props.urls}
        description={props.description}
        responsibilities={props.responsibilities}
      />
    </Col>
    <Col className='SingleProject-demo' xsHidden smHidden md={6} lg={isXL ? 4 : 5}>
      <div className='projectSandboxWrapper'>
        <iframe title={props.name} className='projectSandbox' src={props.urls.app}/>
      </div>
    </Col>

    {/* mobile */}
    <Col xs={12} sm={6} mdHidden lgHidden>
      <div className='container-flex'>
        <h1 className='SingleProject-title'>{props.name}</h1>
        <IconBar icons={icons} />
      </div>
      <ProjectDescription
        mobile
        showLogin={props.showLogin}
        urls={props.urls}
        description={props.description}
        responsibilities={props.responsibilities}
      />
    </Col>
    <Col xs={12} sm={6} mdHidden lgHidden>
      <Thumbnail
        className='Projects-thumbnail'
        target='_blank'
        href={props.urls.app}
        alt={`Photo of and link to project: ${props.name}`}
        src={props.screenshot}
      />
    </Col>
  </Row>
)

export default SingleProject
