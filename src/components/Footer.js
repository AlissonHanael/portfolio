import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <p>Mapa do Site</p>
      <div className="footer-container">
        <a href="/">Ínicio</a>
        <a href="/about">Sobre</a>
        <a href="/projects">Projetos</a>
        <a href="/contact">Contato</a>
      </div>
    </div>
  )
}

export default Footer
