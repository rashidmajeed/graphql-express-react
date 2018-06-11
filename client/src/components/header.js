import React from 'react'
import logo from './../logo.svg';

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4 className="App-title">Welcome to React Express Graphql</h4>
      </header>
    </div>
  )
}

export default Header;
