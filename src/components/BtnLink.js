import React, { Component } from 'react'

class BtnLink extends Component {
  render() {
    return (
      <div className="btn-link">
        <a href={this.props.site} className="btn" target="_blank">
          Site
        </a>
        <a href={this.props.github} className="btn" target="_blank">
          Código
        </a>
      </div>
    )
  }
}

export default BtnLink
