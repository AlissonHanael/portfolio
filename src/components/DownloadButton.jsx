import React from 'react'
import './DownloadButton.css'

const DownloadButton = () => {
  return (
    <div class="main_div">
      <button>
        <a href="./AlissonHanaelZiniGaio-Currículo.pdf" download>
          Download CV
        </a>
      </button>
    </div>
  )
}

export default DownloadButton
