import React from 'react'
import { Grid } from 'react-bootstrap'

import './Portfolio.css'
import NavBar from '../navbar/Navbar'
import Hero from '../hero/Hero'
import About from '../about/About'
import Projects from '../projects/Projects'
import Footer from '../footer/Footer'

const Portfolio = props => (
  <div>
    <NavBar />
    <Grid fluid>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </Grid>
  </div>
)

export default Portfolio
