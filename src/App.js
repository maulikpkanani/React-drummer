import React, { Component } from 'react'
import Display from './components/Display/Display'
import Keys from './components/Keys/Keys'
import './App.css'

class App extends Component {
  state = {
    display: 'Click or Press a key'
  }

  handleDisplayName = name => {
    this.setState({
      display: name
    })
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1>Drummer</h1>
        </header>
        <div id='drum-machine'>
          <Display display={this.state.display} />
          <Keys onDisplayName={this.handleDisplayName} />
        </div>
        <footer className='footer'>
          <span>
            Created by:{' '}
            <a
              className='footer-link'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              Maulik Kanani
            </a>
          </span>
          <span> | </span>
          <span>
            <a
              className='footer-link'
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              View source code
            </a>
          </span>
        </footer>
      </div>
    )
  }
}

export default App
