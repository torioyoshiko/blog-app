import React, { Component } from 'react'
import './App.css'
import AllPost from './components/AllPost'
import CreatePost from './components/CreatePost'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AllPost />
        <CreatePost />
      </div>
    )
  }
}

export default App
