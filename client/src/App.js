import React from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Editor from "./Editor";
import Join from './Join'
import Error from './Error'
import Calendar from './Calendar'

function App() {


  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/edit/:roomid' component={Editor} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/calendar" component={Calendar} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
