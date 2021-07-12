import React from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Editor from "./Editor";
import Join from './Join'

const axios = require('axios')

function App() {

  const callAPI = async () => {
    const res = await axios.get('http://localhost:5000/test')
    console.log(res);
  }

  callAPI()

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/edit' component={Editor} />
        <Route exact path="/join" component={Join} />
      </Switch>
    </>
  )
}

export default App
