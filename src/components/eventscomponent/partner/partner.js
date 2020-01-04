/* eslint-disable react/prop-types */
import React, { Component } from 'react'
import './partner.css'
class Partners extends Component {
  constructor(props) {
    super(props)
    this.state = {
      partnersToRender: this.props.partners.slice(0, 4)
    }
  }
  handleClick = count => {
    // var dots = document.getElementsByClassName('dot')
    // for (var i = 0; i < dots.length; i++)
    //   dots[i].className = dots[i].className.replace(' active', '')
    if (count === 8) {
      this.setState({
        partnersToRender: this.props.partners.slice(count, 11)
      })
      // dots[2].className += ' active'
    } else {
      this.setState({
        partnersToRender: this.props.partners.slice(count, count + 4)
      })
    }
  }
  render() {
    const { partnersToRender } = this.state
    return (
      <div className="partner-parent">
        <div className="partners-head">PARTNERS</div>
        <div className="partners-body">
          {partnersToRender.map(partner => (
            <div key={partner.id} className="each-partner">
              <div className="partner-logo-wrap">
                {' '}
                <img className="partner-logo" src={partner.logo} />
              </div>
              <div className="partner-name">{partner.name}</div>
            </div>
          ))}
        </div>
        <div className="partners-footer">
          <span
            className="dot"
            onClick={() => {
              this.handleClick(0)
            }}
          ></span>
          <span
            className="dot"
            onClick={() => {
              this.handleClick(4)
            }}
          ></span>
          <span className="dot" onClick={() => this.handleClick(8)}></span>
        </div>
      </div>
    )
  }
}

export default Partners
