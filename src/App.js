import React from 'react'
// import logo from './logo.svg'
import theme from './assets/theme.png'
import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="app-parent">
        <img src={theme} alt="theme" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdaJH9lppWdVlgjXDiw60KvkT1kQeUcn-4s-UHDL_BirextvQ/viewform?usp=sf_link"
          className="register-now-button"
        >
          Register Now
        </a>
      </div>
    </React.Fragment>
  )
}

export default App
