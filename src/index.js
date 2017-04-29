import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from './components/app/App'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Blog from './components/blog/Blog'
import './index.css'

const App = () => (
  <Router>
    <Container>
      <Switch>
        <Route exact strict path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
      </Switch>
    </Container>
  </Router>
)

export default App

render(<App />, document.getElementById('root'))
