import React from 'react'
import './DownloadButton.css'
import pdf from '../assets/AlissonHanaelZiniGaio-Currículo.pdf'

const DownloadButton = () => {
  return (
    <div class="main_div">
      <button>
        <a href={pdf} download>
          Download CV
        </a>
      </button>
    </div>
  )
}

export default DownloadButton
